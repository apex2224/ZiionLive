// const axios = require("axios");
// const Visitor = require("../models/Visitor");

// exports.logVisitor = async (req, res) => {
//   try {
//     const { ip, chatSource } = req.body;

//     // IP location fetch karne ke liye public API ka use
//     const locRes = await axios.get(`http://ip-api.com/json/${ip}`);
//     const loc = locRes.data;

//     if (loc.status !== "success") {
//       return res.status(400).json({ error: "Invalid IP or location fetch failed" });
//     }

//     // DB me pehle se visitor hai ya nahi check karo
//     let visitor = await Visitor.findOne({ ip });

//     if (!visitor) {
//       // Naya visitor create karo
//       visitor = new Visitor({
//         ip,
//         location: {
//           city: loc.city,
//           country: loc.country,
//           countryCode: loc.countryCode,
//           lat: loc.lat,
//           lon: loc.lon
//         },
//         activeTime: 0,
//         lastSeen: new Date(),
//         chatSource
//       });

//       await visitor.save();
//     } else {
//       // Agar visitor mil gaya toh uska lastSeen update karo
//       visitor.lastSeen = new Date();
//       if (chatSource) visitor.chatSource = chatSource;
//       await visitor.save();
//     }

//     res.status(200).json({ message: "Visitor logged", visitor });
//   } catch (error) {
//     console.error("Error logging visitor:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };



// // Visitor Info Fetch Karne Ka API
// exports.getVisitors = async (req, res) => {
//   try {
//     // Saare visitors ko lastSeen ke descending order mein fetch karo (latest pehle)
//     const visitors = await Visitor.find().sort({ lastSeen: -1 }).limit(50);
//     res.status(200).json({ visitors });
//   } catch (error) {
//     console.error("Error fetching visitors:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// // update active time 
// // visitorController.js
// exports.updateActivity = async (req, res) => {
//   try {
//     const { ip } = req.body;

//     if (!ip) return res.status(400).json({ error: "IP is required" });

//     const visitor = await Visitor.findOne({ ip });

//     if (!visitor) return res.status(404).json({ error: "Visitor not found" });

//     // activeTime increment karo
//     visitor.activeTime += 30; // assuming frontend ping har 30 sec me bhej raha
//     visitor.lastSeen = new Date();

//     await visitor.save();

//     res.status(200).json({ message: "Activity updated" });
//   } catch (err) {
//     console.error("Error updating activity:", err.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


const axios = require("axios");
const Visitor = require("../models/Visitor");
const UAParser = require("ua-parser-js");
// Visitor ko log karo ya update karo
exports.logVisitor = async (req, res) => {
  try {
    const { ip, chatSource,userAgent } = req.body;

    if (!ip) {
      return res.status(400).json({ error: "IP is required" });
    }

    // IP se location aur ISP fetch karo
    const locRes = await axios.get(`http://ip-api.com/json/${ip}`);
    const loc = locRes.data;

    if (loc.status !== "success") {
      return res.status(400).json({ error: "Invalid IP or location fetch failed" });
    }

  // Device info parse karo
    const parser = new UAParser(userAgent);
    const uaResult = parser.getResult();

    const deviceData = {
      browser: uaResult.browser.name + " " + uaResult.browser.version,
      os: uaResult.os.name + " " + uaResult.os.version,
      type: uaResult.device.type || "desktop",
      userAgent
    };

    // Visitor ko DB me check karo
    let visitor = await Visitor.findOne({ ip });

    if (!visitor) {
      // Naya visitor
      visitor = new Visitor({
        ip,
        location: {
          city: loc.city || '',
          country: loc.country || '',
          countryCode: loc.countryCode || '',
          lat: loc.lat || 0,
          lon: loc.lon || 0
        },
        device:deviceData,
        isp: loc.org || '',
        activeTime: 0,
        lastSeen: new Date(),
        chatSource: chatSource || 'bot'
      });

      await visitor.save();
    } else {
      // Purana visitor - update last seen + chatSource + ISP
      visitor.lastSeen = new Date();
      if (chatSource) visitor.chatSource = chatSource;
      visitor.isp = loc.org || visitor.isp;
      await visitor.save();
    }

    res.status(200).json({ message: "Visitor logged", visitor });
  } catch (error) {
    console.error("Error logging visitor:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Last 50 visitors ko fetch karo
exports.getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ lastSeen: -1 }).limit(50);
    res.status(200).json({ visitors });
  } catch (error) {
    console.error("Error fetching visitors:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Active time update karo
exports.updateActivity = async (req, res) => {
  try {
    const { ip } = req.body;

    if (!ip) return res.status(400).json({ error: "IP is required" });

    const visitor = await Visitor.findOne({ ip });

    if (!visitor) return res.status(404).json({ error: "Visitor not found" });

    visitor.activeTime += 30; // Frontend har 30 sec me ping karega
    visitor.lastSeen = new Date();

    await visitor.save();

    res.status(200).json({ message: "Activity updated" });
  } catch (err) {
    console.error("Error updating activity:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
