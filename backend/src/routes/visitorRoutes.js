// const express = require("express");
// const router = express.Router();
// const { logVisitor ,getVisitors } = require("../controllers/visitorController");

// const { updateActivity } = require("../controllers/visitorController");

// router.patch("/active", updateActivity);

// // POST request to log visitor info
// router.post("/log", logVisitor);
// router.get("/all", getVisitors);



// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  logVisitor,
  getVisitors,
  updateActivity
} = require("../controllers/visitorController");

// Log visitor info
router.post("/log", logVisitor);

// Get all visitors (latest 50)
router.get("/all", getVisitors);

// Update activity (ping every 30s)
router.patch("/active", updateActivity);

module.exports = router;
