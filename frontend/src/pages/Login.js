import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOTP = async () => {
    await axios.post("/api/auth/send-otp", { email });
    setOtpSent(true);
  };

  const verifyOTP = async () => {
    let res = await axios.post("/api/auth/verify-otp", { email, otp });
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Login via OTP</h1>

      {!otpSent ? (
        <>
          <input className="border p-3 my-3" 
                 placeholder="Your Email" 
                 onChange={e => setEmail(e.target.value)} />

          <button className="bg-blue-500 text-white p-3" onClick={sendOTP}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input className="border p-3 my-3"
                 placeholder="Enter OTP" 
                 onChange={e => setOtp(e.target.value)} />

          <button className="bg-green-600 text-white p-3" onClick={verifyOTP}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}
