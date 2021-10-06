import { Injectable } from '@nestjs/common';
import { Connection, getConnection, Repository } from 'typeorm';

import { IBooking, IBookingInput } from '../interfaces';
import Booking from '../models/booking';

@Injectable()
export class BookingRepository {
    private connection: Connection;
    private repository: Repository<Booking>;

    constructor() {
        this.connection = getConnection();
        this.repository = this.connection.getRepository(Booking);
    }

    async createRequest(booking: IBookingInput): Promise<IBooking> {
        return this.repository.save(booking);
    }
}
