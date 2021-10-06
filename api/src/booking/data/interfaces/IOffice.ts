import { IBooking, ICompany } from '.';

export interface IOffice {
    id: string;
    name: string;
    maxSeats: number;
    company: ICompany;
    bookings: IBooking[];
}
