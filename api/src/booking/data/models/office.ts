import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IOffice } from '../interfaces';
import Booking from './booking';
import Company from './company';

@Entity('offices')
export default class Office implements IOffice {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    maxSeats!: number;

    @Column()
    name!: string;

    @OneToMany(() => Booking, booking => booking.office, { cascade: true })
    bookings!: Booking[];

    @ManyToOne(() => Company, company => company.offices, { nullable: false })
    company!: Company;

}
