import { Module } from '@nestjs/common';

import { BookingController, CompanyController } from './http/controllers';
import { BookingRepository, CompanyRepository } from './data/repositories';
import { BookingService } from './services';

@Module({
    controllers: [BookingController, CompanyController],
    providers: [BookingRepository, BookingService, CompanyRepository],
})
export class BookingModule {}
