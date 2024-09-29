'use strict';

const bookings = [];

const createBooking  = function (flightNumber,PassengersCounts = null,price = null){
    const booking = {
        flightNumber,
        PassengersCounts,
        price
    };

    bookings.push(booking);
    console.log(booking);
}

createBooking('LH123');
createBooking('LH123', 47, 85);