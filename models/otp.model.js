const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: '5m' } } // OTP expires in 5 minutes
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;