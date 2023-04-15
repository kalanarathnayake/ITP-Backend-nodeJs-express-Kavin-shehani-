const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passportID: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    toLocation: { type: String, required: true },
    price : { type: String, required: true },
}, {
    timestamps: true,
})

module.exports = Ticket = mongoose.model("Tickets", ticketSchema);