import { format, differenceInHours, addHours } from 'date-fns';
import { Injectable } from '@nestjs/common';

import config from '../../config';
import { ICompanyHttpResponse, IOffice } from '../data/interfaces';
import { CompanyRepository } from '../data/repositories';

@Injectable()
export class BookingService {
    constructor(private companyRepository: CompanyRepository) {}

    async getCompanyInformation(id: string): Promise<ICompanyHttpResponse> {
        const company = await this.companyRepository.findById(id);

        const eventDatePrefix = format(new Date(`${company.eventDate} 12:00:00`), 'EEE, dd LLL yyyy');
        
        const eventStart = new Date(`${eventDatePrefix} ${config.event.startHour} UTC`);
        const eventEnd = new Date(`${eventDatePrefix} ${config.event.endHour} UTC`);

        const eventHours = differenceInHours(eventEnd, eventStart);
        const hoursAvailable = Array.from(
            { length: eventHours }, 
            (_, hours) => addHours(eventStart, hours)
        );

        // for each office verify hours available
        const officesAvailability = company.offices
            .reduce<(IOffice & { availability: string[] })[]>((offices, office) => {
                const bookedHours = office.bookings
                    .filter((booking) => !!booking.isActive && !!booking.isConfirmed)
                    .map((booking) => booking.from.getTime());

                const availability = hoursAvailable
                    .filter((hour) => !bookedHours.includes(hour.getTime()))
                    .map((hour) => format(hour, 'HH:mm'));

                return [ ...offices, { ...office, availability } ];
            }, []);

        const initialAvailabilityAcc = hoursAvailable.reduce((availabilityAcc, hour) => {
            return {
                ...availabilityAcc,
                [format(hour, 'HH:mm')]: [],
            };
        }, {});

        // format in the expected format
        const availability = officesAvailability
            .reduce<ICompanyHttpResponse['availability']>((availabilityAcc, officeCur) => {
                return officeCur.availability
                    .reduce<typeof availabilityAcc>((partialAvailabilityAcc, availabilityHour) => {
                        const availabilityHourAcc = availabilityAcc[availabilityHour] || [];
                        if (!availabilityHourAcc.includes(officeCur.maxSeats)) {
                            return {
                                ...partialAvailabilityAcc,
                                [availabilityHour]: [
                                    ...availabilityHourAcc,
                                    officeCur.maxSeats
                                ],
                            };
                        }

                        return partialAvailabilityAcc;
                    }, availabilityAcc)
            }, initialAvailabilityAcc);

        return {
            name: company.name,
            event: {
                name: company.eventName,
                address: company.eventAddress,
                lat: company.eventLat,
                lng: company.eventLng,
                date: company.eventDate,
            },
            domains: company.companyDomains,
            availability,
        };
    }
}
