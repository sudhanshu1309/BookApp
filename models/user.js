const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema();

userSchema.add({
  name: {
    type: String,
    maxlength: 32,
    trim: true,
  },

  email: String,

  referredUser: {
    type: mongoose.ObjectId,
    default: null,
  },

  isPaymentMade: {
    type: Boolean,
    default: false,
  },

  totalEarnings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
