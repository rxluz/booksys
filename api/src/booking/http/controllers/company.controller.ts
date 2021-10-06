import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

import { ICompanyHttpResponse } from '../../data/interfaces';
import { BookingService } from '../../services';

@Controller('company')
export class CompanyController {
    constructor(private bookingService: BookingService) { }

    @Get(':id')
    async findOne(
        @Param('id', ParseUUIDPipe) id: string, 
    ): Promise<ICompanyHttpResponse> {
        const data = this.bookingService.getCompanyInformation(id);
        
        return data as unknown as ICompanyHttpResponse;
    }
}
