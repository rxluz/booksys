import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IBooking } from '../interfaces/IBooking';
import Office from './office';

@Entity('bookings')
export default class Booking implements IBooking {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    seats!: number;

    @Column({ type: "datetime" })
    from!: Date;

    @Column({ type: "datetime" })
    to!: Date;

    @Column({ default: () => "false" })
    isConfirmed!: boolean;

    @Column({ default: () => "true" })
    isActive!: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt!: Date;

    @ManyToOne(() => Office, office => office.bookings, { nullable: true })
    office?: Office;
    
}
