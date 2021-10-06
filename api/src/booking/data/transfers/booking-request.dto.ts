import { IsDateString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

import { IBookingInput } from '../interfaces/IBooking';

export class BookingRequestDto implements IBookingInput {
    @IsNotEmpty()
    name!: string;
    
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNumber()
    @IsNotEmpty()
    seats!: number;

    @IsDateString()
    @IsNotEmpty()
    from!: Date;
    
    @IsDateString()
    @IsNotEmpty()
    to!: Date;
}
