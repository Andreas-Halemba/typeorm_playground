import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity
} from "typeorm";
import { Hotel } from "./Hotel";

@Entity()
export class Chain extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    active: boolean;

    @OneToMany(type => Hotel, hotel => hotel.chain)
    hotels: Hotel[];
}
