const axios = require('axios');

async function getOTP(email, maxWait = 60000, interval = 3000) {
  const start = Date.now();

  while (Date.now() - start < maxWait) {
    try {
      const res = await axios.get(
        `https://stage.cloudedu.com.au/api/otp?email=${email}`
      );

      const otp = res.data.otp;

      if (otp) {
        console.log("OTP received:", otp);
        return otp;
      }

    } catch (err) {
      console.log("Waiting for OTP...");
    }

    await new Promise(r => setTimeout(r, interval));
  }

  throw new Error("OTP not received within time limit");
}

module.exports = { getOTP };