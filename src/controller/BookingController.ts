import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Booking } from "../entity/Booking";

export class BookingController {
    async all(request: Request, response: Response, next: NextFunction) {
        return Booking.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const booking = await Booking.findOne(request.params.id, {
            relations: ["hotel", "user"]
        });
        return booking;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        try {
            return Booking.save(request.body);
        } catch (error) {
            console.log(error);
        }
    }
}
