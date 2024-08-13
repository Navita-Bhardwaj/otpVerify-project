import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./App.css";

function App() {
  const [otp, SetOtp] = useState("");
  const [ph, SetPh] = useState("");
  const [loading, SetLoading] = useState(false);
  const [showOtp, SetShowOtp] = useState(false);
  const [user, SetUser] = useState(null);

  return (
    <section className="container">
      <div className="container-div">
      {
        !user ? <h2> ✅Login Succuss</h2> :
        <div className="container-content">
          <h1 className="h1-content">
            Welcome to <br />
             CODE A PROGRAM
          </h1>
          {
            showOtp ?         
             <>
            <div className="Bs">
              <BsFillShieldLockFill size={30} />
            </div>
            <label htmlFor="ph" className="text-center">
              Enter your otp here
            </label>
            <OtpInput
              value={otp}
              onChange={SetOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="otp.container"
            ></OtpInput>
            <button className="Btn">
              {loading && <CgSpinner size={25}  className="mt-1 animate-spin" />}
              <span>Verify OTP</span>
            </button>
          </> :
          <> 
            <div className="Bs">
              <BsTelephoneFill size={25} />
            </div>
            <label htmlFor="otp" className="text-center">
              Enter your phone number
            </label>
            <PhoneInput country={"in"}
              value={ph}
              onChange={SetPh} />
            <button className="Btn">
              {loading && <CgSpinner size={25}  className="mt-1 animate-spin" />}

              <span>Send code via SMS</span>
            </button>
            </> 
          }
        </div>
      }

        
      </div>
    </section>
  );
}

export default App;
