import { UserController } from "./controller/UserController";
import { Hotelcontroller } from "./controller/HotelController";
import { BookingController } from "./controller/BookingController";

export const Routes = [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    },
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    },
    {
        method: "delete",
        route: "/users",
        controller: UserController,
        action: "remove"
    },
    {
        method: "get",
        route: "/hotels",
        controller: Hotelcontroller,
        action: "all"
    },
    {
        method: "get",
        route: "/booking",
        controller: BookingController,
        action: "one"
    },
    {
        method: "get",
        route: "/bookings",
        controller: BookingController,
        action: "all"
    },
    {
        method: "post",
        route: "/booking",
        controller: BookingController,
        action: "save"
    }
];
