import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BaseEntity
} from "typeorm";
import { Chain } from "./Chain";

@Entity()
export class Hotel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Chain, chain => chain.hotels, {
        eager: true
    })
    chain: Chain;

    @Column()
    active: boolean;
}
