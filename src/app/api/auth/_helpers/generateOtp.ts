const crypto = require('crypto');

export function generateOtp() {
    const otpLength = 6;
    const characters = '0123456789';
    const randomBytes = crypto.randomBytes(otpLength);
  
    // Convert bytes to string and filter characters
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      const index = randomBytes[i] % characters.length;
      otp += characters[index];
    }
  
    return otp;
}