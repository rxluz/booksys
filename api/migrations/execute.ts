import { createConnection } from 'typeorm';

import ormconfig from '../src/config/ormconfig';
import Company from '../src/booking/data/models/company';

async function migrate(seed: boolean) {
    const connection = await createConnection({
        ...ormconfig,
        synchronize: true // that will force to generate or update the database
    });

    if (seed) {
        // seed basic dev structure
        const companyRepository = connection.getRepository(Company);

        const coke = {
            name: 'Coke',
            eventName: 'Cola Day Coke',
            eventAddress: 'Dogpatch Labs - The Chq Building, Custom House Quay, North Dock, Dublin',
            eventLat: 53.3493909,
            eventLng: -6.2503939,
            eventDate: new Date('Sat, 18 Dec 2021 08:00:00 UTC'),
            companyDomains: 'coke.com,gmail.com', // gmail for testing pourposes
            offices: [
                {
                    name: 'Coke 01',
                    maxSeats: 100,
                },
                {
                    name: 'Coke 02',
                    maxSeats: 100,
                },
                {
                    name: 'Coke 03',
                    maxSeats: 100,
                },
                {
                    name: 'Coke 04',
                    maxSeats: 100,
                },
                {
                    name: 'Coke 05',
                    maxSeats: 25,
                },
                {
                    name: 'Coke 06',
                    maxSeats: 25,
                },
                {
                    name: 'Coke 07',
                    maxSeats: 10,
                    bookings: [
                        {
                            name: 'Jane Doe',
                            email: 'jane.doe@coke.com',
                            from: new Date('Sat, 18 Dec 2021 09:00:00 UTC'),
                            to: new Date('Sat, 18 Dec 2021 10:00:00 UTC'),
                            isConfirmed: false,
                            isActive: false,
                            seats: 10,
                        }
                    ],
                },
                {
                    name: 'Coke 08',
                    maxSeats: 10,
                    bookings: [
                        {
                            name: 'John Doe',
                            email: 'john.doe@coke.com',
                            from: new Date('Sat, 18 Dec 2021 09:00:00 UTC'),
                            to: new Date('Sat, 18 Dec 2021 10:00:00 UTC'),
                            isConfirmed: false,
                            isActive: false,
                            seats: 10,
                        }
                    ],
                },
                {
                    name: 'Coke 09',
                    maxSeats: 5,
                },
                {
                    name: 'Coke 10',
                    maxSeats: 5,
                },
            ],
        };
        await companyRepository.save(coke);

        const pepsi = {
            name: 'PepsiCo',
            eventName: 'Cola Day PepsiCo',
            eventAddress: 'Dogpatch Labs - The Chq Building, Custom House Quay, North Dock, Dublin',
            eventLat: 53.3493909,
            eventLng: -6.2503939,
            eventDate: new Date('Sat, 18 Dec 2021 08:00:00 UTC'),
            companyDomains: 'pepsi.com,gmail.com', // gmail for testing pourposes
            offices: [
                {
                    name: 'Pepsi 01',
                    maxSeats: 100,
                },
                {
                    name: 'Pepsi 02',
                    maxSeats: 100,
                },
                {
                    name: 'Pepsi 03',
                    maxSeats: 100,
                },
                {
                    name: 'Pepsi 04',
                    maxSeats: 100,
                },
                {
                    name: 'Pepsi 05',
                    maxSeats: 25,
                },
                {
                    name: 'Pepsi 06',
                    maxSeats: 25,
                },
                {
                    name: 'Pepsi 07',
                    maxSeats: 10,
                },
                {
                    name: 'Pepsi 08',
                    maxSeats: 10,
                },
                {
                    name: 'Pepsi 09',
                    maxSeats: 5,
                    bookings: [
                        {
                            name: 'John Doe',
                            email: 'john.doe@pepsi.com',
                            from: new Date('Sat, 18 Dec 2021 08:00:00 UTC'),
                            to: new Date('Sat, 18 Dec 2021 09:00:00 UTC'),
                            isConfirmed: false,
                            isActive: false,
                            seats: 5,
                        }
                    ]
                },
                {
                    name: 'Pepsi 10',
                    maxSeats: 5,
                    bookings: [
                        {
                            name: 'Jane Doe',
                            email: 'jane.doe@pepsi.com',
                            from: new Date('Sat, 18 Dec 2021 08:00:00 UTC'),
                            to: new Date('Sat, 18 Dec 2021 09:00:00 UTC'),
                            isConfirmed: false,
                            isActive: false,
                            seats: 5,
                        }
                    ]
                },
            ]
        };
        await companyRepository.save(pepsi);
    }   
}

(async () => {
    await migrate(true);
    
    process.exit(0);
})();