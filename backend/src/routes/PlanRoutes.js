const express = require("express");
const router = express.Router();
const { getAllPlans,assignPlanToUser, upgradeUserPlan  } = require("../controllers/planController");

router.get("/", getAllPlans);
router.post("/assign", assignPlanToUser);
router.put("/upgrade", upgradeUserPlan);

module.exports = router;