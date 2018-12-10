import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    BaseEntity
} from "typeorm";
import { User } from "./User";
import { Hotel } from "./Hotel";

@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @ManyToOne(type => Hotel, hotel => hotel.id)
    hotel: Hotel;

    @Column()
    startUtcTimestamp: number;

    @Column()
    endUtcTimestamp: number;
}
