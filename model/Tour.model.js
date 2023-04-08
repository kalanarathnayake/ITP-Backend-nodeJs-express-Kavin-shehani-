const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourpackSchema = new Schema({
    name: { type: String, required: true },
    fromLocation: { type: String, required: true },
    toLocation: { type: String, required: true },
    description: { type: String, required: true },
    transportMode: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
})

module.exports = Tour = mongoose.model("Tour Packages", tourpackSchema);