import { IOffice } from '.';

export interface IBooking {
    id: string;
    name: string;
    email: string;
    seats: number;
    from: Date;
    to: Date;
    office?: IOffice;
    isConfirmed: boolean;
    isActive: boolean;
    createdAt: Date;
}

export interface IBookingInput extends Omit<IBooking, 'id' | 'office' | 'isConfirmed' | 'isActive' | 'createdAt' > {};