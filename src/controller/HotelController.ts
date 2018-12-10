import { NextFunction, Request, Response } from "express";
import { Hotel } from "../entity/Hotel";

export class Hotelcontroller {
    async all(request: Request, response: Response, next: NextFunction) {
        return await Hotel.find({ relations: ["chain"] });
    }
}
