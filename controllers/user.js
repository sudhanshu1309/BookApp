const User = require("../models/user");

const increaseEarnings = (id) => {
  User.findById(id, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Referer not found!",
      });
    }
    var newEarning = user.totalEarnings + 10;
    user.totalEarnings = newEarning;
    user.save();
  });
};

exports.getReward = (req, res) => {
  const { userId } = req.body;

  User.findByIdAndUpdate(userId, { isPaymentMade: true }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "user not found!",
      });
    }
    user.isPaymentMade = true;
    user.save();
    var refererId = user.referredUser._id.toString();
    increaseEarnings(refererId);
  });

  return res.send("Successfully Rewarded!");
};
