import { Body, Controller, Delete, Param, ParseUUIDPipe, Post } from '@nestjs/common';

import { IBooking } from '../../data/interfaces';
import { BookingRequestDto } from '../../data/transfers';
import { BookingRepository } from '../../data/repositories';

@Controller('booking')
export class BookingController {
    constructor(private bookingRepository: BookingRepository) {}

    @Post('')
    async request(
        @Body() body: BookingRequestDto
    ): Promise<IBooking> {
        return this.bookingRepository.createRequest(body);
    }

    @Post(':id/confirm')
    async confirm(
        @Param('id', ParseUUIDPipe) id: string, 
    ): Promise<string> {
        return '';
    }

    @Delete(':id')
    async cancel(
        @Param('id', ParseUUIDPipe) id: string, 
    ): Promise<string> {
        return '';
    }

}