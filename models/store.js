const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockSchema = newSchema({
  medicine: { type: mongoose.Types.ObjectId, ref: "Medicine", required: true },
  qty: { type: Number, min: 0, required: true },
});

const storeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pharmacists: [{ type: mongoose.Types.ObjectId, ref: "Pharmacist" }],
  stocks: [stockSchema],
});

module.exports = mongoose.model("Store", storeSchema);