const Plan = require("../models/Plan");
const User = require("../models/User"); 

// Get all plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json({ success: true, plans });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};


// Assign a plan to a user
exports.assignPlanToUser = async (req, res) => {
    const { userId, planId } = req.body;
  
    if (!userId || !planId) {
      return res.status(400).json({ success: false, message: "userId and planId are required." });
    }
  
    try {
      const user = await User.findById(userId);
      const plan = await Plan.findById(planId);
  
      if (!user) return res.status(404).json({ success: false, message: "User not found." });
      if (!plan) return res.status(404).json({ success: false, message: "Plan not found." });
  
      user.plan = planId;
      await user.save();
  
      res.status(200).json({ success: true, message: "Plan assigned successfully.", user });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error assigning plan.", error });
    }
  };

// Upgrade a user's plan
exports.upgradeUserPlan = async (req, res) => {
    const { userId, newPlanId } = req.body;
  
    if (!userId || !newPlanId) {
      return res.status(400).json({ success: false, message: "userId and newPlanId are required." });
    }
  
    try {
      const user = await User.findById(userId);
      const newPlan = await Plan.findById(newPlanId);
  
      if (!user) return res.status(404).json({ success: false, message: "User not found." });
      if (!newPlan) return res.status(404).json({ success: false, message: "New plan not found." });
  
      // Optional: check if new plan is different from current
      if (user.plan && user.plan.toString() === newPlanId) {
        return res.status(400).json({ success: false, message: "User already has this plan." });
      }
  
      user.plan = newPlanId;
      await user.save();
  
      res.status(200).json({ success: true, message: "Plan upgraded successfully.", user });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error upgrading plan.", error });
    }
  };  // Get a user's current plan

