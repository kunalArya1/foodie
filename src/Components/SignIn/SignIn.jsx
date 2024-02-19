import React, { useContext } from "react";
import ResContext from "../../Context/ResContext";
import { RxCross1 } from "react-icons/rx";

const SignIn = () => {
  const { setSignInModel, SignInModel } = useContext(ResContext);

  if (!SignInModel) return null;
  return (
    <div>
      <div className=" h-full fixed z-10 right-0 w-4/12 bg-[#f0f0f0] p-9">
        <button onClick={() => setSignInModel(false)} className=" py-4 mb-5">
          <RxCross1 className=" text-2xl" />
        </button>
        <div className=" flex justify-between">
          <div>
            <h1 className=" font-semibold text-4xl">Login</h1>
            <p className=" text-lg text-zinc-500 mb-5 mt-2">
              or ,{" "}
              <span className=" text-orange-600 cursor-pointer">
                create an account{" "}
              </span>
            </p>
            <div className=" h-[2px] w-14 bg-black"></div>
          </div>
          <div>
            <img
              className="h-20"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
            />
          </div>
        </div>

        <div className=" text-center mt-14">
          <input
            type="text"
            placeholder="Phone number"
            className=" p-6 outline-none shadow-md border border-zinc-300 w-[29vw]"
          />
          <button className=" p-4 bg-orange-500 w-[29vw] mt-4 shadow-md border border-zinc-300">
            LOGIN
          </button>
          <p className=" text-start tracking-tight mt-2 ml-1 font-semibold text-zinc-500">
            By clicking on Login, I accept the Terms & Conditions & Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
