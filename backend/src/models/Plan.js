const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Basic", "Pro", "Unlimited"],
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true, // -1 will represent unlimited
  },
  features: {
    type: [String],
    required: true,
  },
  trialDays: {
    type: Number,
    default: 0, // 0 for Basic, 14 for Pro & Unlimited
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Plan", planSchema);
