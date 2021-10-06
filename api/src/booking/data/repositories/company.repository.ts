import { format } from 'date-fns';
import { Injectable } from '@nestjs/common';
import { Connection, getConnection, Repository } from 'typeorm';

import { ICompany, ICompanyResponse } from '../interfaces';
import Company from '../models/company';

@Injectable()
export class CompanyRepository {
    private connection: Connection;
    private repository: Repository<Company>;

    constructor() {
        this.connection = getConnection();
        this.repository = this.connection.getRepository(Company);
    }

    normalize(company: ICompany): ICompanyResponse {
        return {
            ...company,
            companyDomains: company.companyDomains.split(','),
            eventDate: format(company.eventDate, 'yyyy-LL-dd'),
        };
    }

    async findById(id: string): Promise<ICompanyResponse> {
        const company = await this.repository.findOneOrFail(id, { relations: [ 'offices', 'offices.bookings' ] });
        return this.normalize(company);
    }
}
