import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase.init";
import email from "../../../img/email.svg";

export const EmailVerification = () => {
  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  if (sending) {
    toast.success("Verification email sent!");
  }
  return (
    <div className=" bg-yellow-200">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 sm:mx-auto">
              <img src={email} alt="" />
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Please,</span>
                </span>{" "}
                verify your email first!
              </h2>
              <p className="text-base text-black md:text-lg">
                We have sent an email to{" "}
                <span className="font-bold">{user.email}</span> <br />
                You need to verify your email to continue.
              </p>
              <p className="text-base text-black md:text-lg mt-4">
                If you have not received the verification email, please check
                your "Spam" folder. You can also click the resend button below
                to have another email sent to you.
              </p>
            </div>
            <div>
              <button
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-white bg-teal-accent-400 hover:bg-lime-500 focus:shadow-outline focus:outline-none"
                onClick={async () => {
                  await sendEmailVerification();
                }}
              >
                Resend Verification Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
