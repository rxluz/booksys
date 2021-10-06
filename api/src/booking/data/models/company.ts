import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ICompany } from '../interfaces';
import Office from './office';

@Entity('companies')
export default class Company implements ICompany {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;
    
    @Column()
    eventName!: string;
    
    @Column()
    eventAddress!: string;

    @Column()
    eventLat!: number;

    @Column()
    eventLng!: number;

    @Column({ type: "datetime" })
    eventDate!: Date;

    @Column()
    companyDomains!: string;

    @OneToMany(() => Office, office => office.company, { cascade: true })
    offices!: Office[];
}
