// const mongoose = require("mongoose");

// const visitorSchema = new mongoose.Schema({
//   ip: String,
//   location: {
//     city: String,
//     country: String,
//     countryCode: String,
//     lat: Number,
//     lon: Number
//   },
//   activeTime: {
//     type: Number,
//     default: 0 // in seconds
//   },
//   lastSeen: {
//     type: Date,
//     default: Date.now
//   },
//   chatSource: {
//     type: String,
//     enum: ["bot", "agent"],
//     default: "bot"
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("Visitor", visitorSchema);

const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    city: { type: String, default: '' },
    country: { type: String, default: '' },
    countryCode: { type: String, default: '' },
    lat: { type: Number, default: 0 },
    lon: { type: Number, default: 0 }
  },
  activeTime: {
    type: Number,
    default: 0
  },
  lastSeen: {
    type: Date,
    default: Date.now
  },
  chatSource: {
    type: String,
    enum: ["bot", "agent", "unknown"],
    default: "bot"
  },
  device: {
    browser: { type: String, default: '' },
    os: { type: String, default: '' },
    type: { type: String, default: '' },
    userAgent: { type: String, default: '' }
  },
  isp: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Visitor", visitorSchema);







// const mongoose = require("mongoose");

// const visitorSchema = new mongoose.Schema({
  //   ip: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   location: {
//     city: { type: String, default: '' },
//     country: { type: String, default: '' },
//     countryCode: { type: String, default: '' },
//     lat: { type: Number, default: 0 },
//     lon: { type: Number, default: 0 }
//   },
//   activeTime: {
//     type: Number,
//     default: 0 // in seconds
//   },
//   lastSeen: {
//     type: Date,
//     default: Date.now
//   },
//   chatSource: {
//     type: String,
//     enum: ["bot", "agent", "unknown"],
//     default: "bot"
//   },
//   device: {
//   browser: String,      // Chrome, Firefox etc.
//   os: String,           // Windows 10, Android 11 etc.
//   type: String,         // desktop, mobile, tablet
//   userAgent: String     // Full raw user-agent string
//   },
//   isp: {
//     type: String,
//     default: ''
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("Visitor", visitorSchema);
