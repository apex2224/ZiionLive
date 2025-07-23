// backend/scripts/seedPlans.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Plan = require("../src/models/Plan"); // Adjust the path as necessary
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// dotenv.config(); // Load DB credentials from .env

const plans = [
  {
    name: "Basic",
    price: 0,
    seats: 2,
    features: [
      "Unlimited chat history",
      "Livechat",
      "Mobile apps",
      "Basic integrations",
    ],
    trialDays: 0,
  },
  {
    name: "Pro",
    price: 25,
    seats: 4,
    features: [
      "Unlimited chat history",
      "Livechat + Email",
      "Advanced integrations",
      "Shared inbox",
    ],
    trialDays: 14,
  },
  {
    name: "Unlimited",
    price: 95,
    seats: -1, // -1 for unlimited
    features: [
      "Unlimited chat history",
      "Livechat + Email + More",
      "Premium integrations",
      "Advanced analytics",
    ],
    trialDays: 14,
  },
];

async function seedPlans() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Plan.deleteMany(); // Optional: Clears old plans
    await Plan.insertMany(plans);
    console.log("✅ Plans seeded successfully.");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Failed to seed plans:", error);
    mongoose.disconnect();
  }
}

seedPlans();
