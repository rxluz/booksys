import { IOffice } from './IOffice';

export interface ICompany {
    id: string;
    name: string;
    eventName: string;
    eventAddress: string;
    eventLat: number;
    eventLng: number;
    eventDate: Date;
    companyDomains: string;
    offices: IOffice[];
}

export interface ICompanyResponse extends Omit<ICompany, 'companyDomains' | 'eventDate'> {
    eventDate: string;
    companyDomains: string[];
}
