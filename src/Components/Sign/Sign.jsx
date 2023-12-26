import { useState } from "react";

export function Sign() {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailValid] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeLastName(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }

  function handleChangeEmail(e) {
    e.preventDefault();
    setEmailValid(e.target.value);
  }
  function handleChangePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleValid(event) {
    event.preventDefault();
    setIsValid(true);
  }

  return (
    <div className=" flex flex-col w-[327px] bg-[#fff] p-[24px] rounded-[10px] z-50 xl:w-[540px] xl:p-[40px] shadow-custom ">
      <div className="">
        <form onSubmit={handleValid}>
          <div className=" flex flex-col relative">
            <input
              className=" text-[14px] border-[1px] border-[#DEDEDE] mb-[6px] py-[15px] pl-[19px] w-[279px] rounded-[5px] text-[#3D3B48] outline-none xl:w-[460px] "
              placeholder="First Name"
              key={40}
              type="text"
              value={name}
              onChange={handleChangeName}
            />
            {isValid === true && name === "" ? (
              <>
                <p className=" mb-[16px] text-right text-[11px] italic text-[#FF7979]">
                  First Name cannot be empty
                </p>
                <img
                  className=" absolute right-5 top-5 w-[24px] h-[24px]"
                  src="./icon.jpg"
                  alt=""
                />
              </>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className=" text-[14px] border-[1px] border-[#DEDEDE] mb-[6px] py-[15px] pl-[19px] w-[279px] rounded-[5px] text-[#3D3B48] outline-none xl:w-[460px] "
              placeholder="Last Name"
              key={41}
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
            />
            {isValid === true && lastName === "" ? (
              <>
                <p className=" mb-[16px] text-right text-[11px] italic text-[#FF7979]">
                  Last Name cannot be empty
                </p>
                <img
                  className=" absolute right-5 top-5 w-[24px] h-[24px]"
                  src="./icon.jpg"
                  alt=""
                />
              </>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className=" text-[14px] border-[1px] border-[#DEDEDE] mb-[6px] py-[15px] pl-[19px] w-[279px] rounded-[5px] text-[#3D3B48] outline-none xl:w-[460px] "
              placeholder="Email"
              key={42}
              type="text"
              value={email}
              onChange={handleChangeEmail}
            />
            {isValid === true && !emailRegex.test(email) ? (
              <>
                <p className=" mb-[16px] text-right text-[11px] italic text-[#FF7979]">
                  Looks like this is not an email
                </p>
                <img
                  className=" absolute right-5 top-5 w-[24px] h-[24px]"
                  src="./icon.jpg"
                  alt=""
                />
              </>
            ) : null}
          </div>
          <div className=" relative">
            <input
              className=" text-[14px] border-[1px] border-[#DEDEDE] mb-[6px] py-[15px] pl-[19px] w-[279px] rounded-[5px] text-[#3D3B48] outline-none xl:w-[460px] "
              placeholder="Password"
              key={43}
              type="password"
              value={password}
              onChange={handleChangePassword}
            />

            {isValid === true && password === "" ? (
              <>
                <p className=" mb-[16px] text-right text-[11px] italic text-[#FF7979]">
                  Password cannot be empty
                </p>
                <img
                  className=" absolute right-5 top-5 w-[24px] h-[24px]"
                  src="./icon.jpg"
                  alt=""
                />
              </>
            ) : null}
          </div>

          <button className=" flex justify-center items-center mt-[10px] w-[279px] bg-[#38CC8B] text-[#fff] text-[15px] px-[44px] py-[15px] rounded-[5px] shadow-forBtn  xl:w-[460px] hover:bg-[#77E2B3]">
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p className="text-center text-[11px] w-[249px] mx-auto font-bold text-[#A6A1CF] leading-8 p-[5px] xl:w-[400px] ">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-[11px] text-[#FF7979]">Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
