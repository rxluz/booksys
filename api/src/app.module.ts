import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';

@Module({
    imports: [ BookingModule ]
})
export class AppModule {}
