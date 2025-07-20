import React, { useContext } from "react";
import ResContext from "../../Context/ResContext";
import { RxCross1 } from "react-icons/rx";

const SignIn = () => {
  const { setSignInModel, SignInModel } = useContext(ResContext);

  if (!SignInModel) return null;
  return (
    <div>
      <div className="h-full fixed z-10 right-0 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 bg-[#f0f0f0] p-4 sm:p-6 lg:p-9">
        <button onClick={() => setSignInModel(false)} className="py-4 mb-5">
          <RxCross1 className="text-xl sm:text-2xl" />
        </button>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Login</h1>
            <p className="text-base sm:text-lg text-zinc-500 mb-4 sm:mb-5 mt-2">
              or{" "}
              <span className="text-orange-600 cursor-pointer">
                create an account
              </span>
            </p>
            <div className="h-[2px] w-14 bg-black"></div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <img
              className="h-16 sm:h-20"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
            />
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-14">
          <input
            type="text"
            placeholder="Phone number"
            className="p-4 sm:p-6 outline-none shadow-md border border-zinc-300 w-full max-w-[29vw] text-base sm:text-lg"
          />
          <button className="p-3 sm:p-4 bg-orange-500 w-full max-w-[29vw] mt-4 shadow-md border border-zinc-300 text-white font-semibold text-base sm:text-lg">
            LOGIN
          </button>
          <p className="text-left tracking-tight mt-2 ml-1 font-semibold text-zinc-500 text-xs sm:text-sm">
            By clicking on Login, I accept the Terms & Conditions & Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
