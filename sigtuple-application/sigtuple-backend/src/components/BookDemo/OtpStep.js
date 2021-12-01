import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-intl-tel-input/dist/main.css";
import { sendOtp, verifyOtp } from "../../Api";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const otpSchema = yup.object().shape({
  box1: yup
    .string()
    .required("Please Enter number")
    .max(1, "Please only number"),
  box2: yup
    .string()
    .required("Please Enter number")
    .max(1, "Please only number"),
  box3: yup
    .string()
    .required("Please Enter number")
    .max(1, "Please only number"),
  box4: yup
    .string()
    .required("Please Enter number")
    .max(1, "Please only number"),
});

const OtpStep = ({ userDetails, setOTPStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(otpSchema) });
  const [OTPError, setOTPError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const resendOTP = () => {
    if (userDetails && userDetails.phone_no) {
      const sendOtpFunction = async () => {
        let data = await sendOtp({ phone_no: userDetails.phone_no });
        if (data.type) {
          toast.success("OTP has been sent to your mobile", {
            position: "bottom-left",
          });
          // setStep("otp")
        } else {
          toast.error("Please provide valid phone number", {
            position: "bottom-left",
          });
        }
      };
      sendOtpFunction();
    }
  };

  const onSubmit = (code) => {
    const verifyOtpFunction = async () => {
      let otp = `${code.box1}${code.box2}${code.box3}${code.box4}`;
      let data = await verifyOtp({ phone_no: userDetails.phone_no, code: otp });
      if (data.type) {
        console.log("data", data);
        if (data.message === "pending") {
          toast.error("Please enter otp again", { position: "bottom-left" });
          reset();
        } else {
          toast.success("Success", { position: "bottom-left" });
          setOTPStatus(true);
        }
      } else {
        toast.error("Please enter otp again", { position: "bottom-left" });
        setOTPError(true);
        reset();
      }
    };
    verifyOtpFunction();
  };

  const getCodeBoxElement = (index) => {
    return document.getElementById("box" + index);
  };

  const onKeyUpEvent = (index, event) => {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
        getCodeBoxElement(index + 1).focus();
      } else {
        getCodeBoxElement(index).blur();
        console.log("submit code ");
      }
    }
    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
  };

  const onFocusEvent = (index) => {
    for (let item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (currentElement && !currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  };

  // useEffect(()=>{
  //     if(!isOpen){
  //         reset()
  //         setStep("step1")
  //     }

  // },[isOpen])

  return (
    <div className="book-steps steps-one">
      <div className="book-steps-form-otp">
        <form className="form ">
          <div className="">
            <h2 className="text-title fw_6">Enter OTP</h2>
            <p className="text-gray fs_14">
              Please enter the one-time-password sent on your phone
            </p>
          </div>
          <div className="otp-img mtb-70 ">
            <svg
              width="63"
              height="102"
              viewBox="0 0 63 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.8641 0H5.02174C2.28261 0 0 2.26667 0 4.98667V97.0133C0 99.7333 2.28261 102 5.02174 102H57.8641C60.6033 102 62.8859 99.7333 62.8859 97.0133V4.98667C63 2.26667 60.7174 0 57.8641 0ZM23.625 3.96667C23.625 3.4 24.0815 2.94667 24.6522 2.94667H37.7772C38.3478 2.94667 38.8043 3.4 38.8043 3.96667V6.00667C38.8043 6.57333 38.3478 7.02667 37.7772 7.02667H24.6522C24.0815 7.02667 23.625 6.57333 23.625 6.00667V3.96667ZM18.8315 2.94667C19.9728 2.94667 20.8859 3.85333 20.8859 4.98667C20.8859 6.12 19.9728 7.02667 18.8315 7.02667C17.6902 7.02667 16.7772 6.12 16.7772 4.98667C16.8913 3.85333 17.6902 2.94667 18.8315 2.94667ZM31.2717 95.9933C28.9891 95.9933 27.2772 94.18 27.2772 92.0267C27.2772 89.8733 29.1033 88.06 31.2717 88.06C33.4402 88.06 35.2663 89.8733 35.2663 92.0267C35.2663 94.18 33.4402 95.9933 31.2717 95.9933ZM56.9511 81.4867H6.04891V9.97333H56.9511V81.4867Z"
                fill="#707070"
              />
              <path
                d="M30.587 60.0663L27.8478 60.8597L28.1902 58.1396H26.25L26.5924 60.8597L23.8533 60.0663L23.625 61.8796L26.0217 62.1063L24.4239 64.2597L26.1359 65.1663L27.163 62.7863L28.3043 65.1663L30.0163 64.2597L28.4185 62.1063L30.9293 61.8796L30.587 60.0663Z"
                fill="#DE1A1B"
              />
              <path
                d="M42.457 64.2597L44.1689 65.1663L45.1961 62.7863L46.3374 65.1663L48.0494 64.2597L46.3374 62.1063L48.8483 61.8796L48.62 60.0663L45.8809 60.8597L46.2233 58.1396H44.2831L44.5113 60.8597L41.8863 60.0663L41.5439 61.8796L44.0548 62.1063L42.457 64.2597Z"
                fill="#DE1A1B"
              />
              <path
                d="M15.4073 64.2597L17.2334 65.1663L18.2606 62.7863L19.4019 65.1663L20.9997 64.2597L19.4019 62.1063L21.9127 61.8796L21.6845 60.0663L18.9454 60.8597L19.1736 58.1396H17.2334L17.5758 60.8597L14.8367 60.0663L14.6084 61.8796L17.1193 62.1063L15.4073 64.2597Z"
                fill="#DE1A1B"
              />
              <path
                d="M37.2067 58.1396H35.2665L35.4947 60.8597L32.8697 60.0663L32.5273 61.8796L35.0382 62.1063L33.4404 64.2597L35.1523 65.1663L36.1795 62.7863L37.3208 65.1663L39.0328 64.2597L37.3208 62.1063L39.8317 61.8796L39.6034 60.0663L36.8643 60.8597L37.2067 58.1396Z"
                fill="#DE1A1B"
              />
              <path
                d="M24.5384 47.5995H37.8916C38.234 47.5995 38.5764 47.4862 38.8047 47.2595C39.0329 47.0329 39.1471 46.6929 39.1471 46.3529V38.4195C39.1471 38.0795 39.0329 37.7395 38.8047 37.5129C38.5764 37.2862 38.234 37.1729 37.8916 37.1729H27.6199V32.7529C27.6199 31.7329 27.9623 30.9395 28.6471 30.2595C29.3319 29.5795 30.1308 29.2395 31.1579 29.2395C32.1851 29.2395 32.984 29.5795 33.6688 30.2595C34.3536 30.9395 34.696 31.7329 34.696 32.7529C34.696 32.9795 34.8101 33.2062 34.9243 33.3195C35.1525 33.5462 35.2666 33.5462 35.609 33.5462H36.5221C36.7503 33.5462 36.9786 33.4329 37.0927 33.3195C37.321 33.0929 37.321 32.9795 37.321 32.7529C37.321 31.0529 36.7503 29.5795 35.4949 28.3329C34.2395 27.0862 32.7558 26.5195 31.0438 26.5195C29.3319 26.5195 27.8482 27.0862 26.5927 28.3329C25.3373 29.5795 24.7666 31.0529 24.7666 32.7529V37.1729H24.3101C23.9677 37.1729 23.6253 37.2862 23.3971 37.5129C23.1688 37.7395 23.0547 38.0795 23.0547 38.4195V46.3529C23.0547 46.6929 23.1688 47.0329 23.3971 47.2595C23.8536 47.3729 24.196 47.5995 24.5384 47.5995Z"
                fill="#DE1A1B"
              />
            </svg>
          </div>
          <div className="mt-4">
            <div className="otp-grid grid-4 ">
              <div className="otp-number">
                <input
                  type="number"
                  id="box1"
                  {...register("box1")}
                  maxLength="1"
                  onKeyUp={(e) => {
                    console.log(e.target.value.length);
                    e.preventDefault();
                    if (e.target.value.length > 1) {
                      setValue(
                        "box1",
                        e.target.value.slice(
                          e.target.value.length - 1,
                          e.target.value.length
                        )
                      );
                      return false;
                    } else {
                      onKeyUpEvent(1, e);
                    }
                  }}
                  onFocus={onFocusEvent(1)}
                />
              </div>
              <div className="otp-number">
                <input
                  type="number"
                  id="box2"
                  {...register("box2")}
                  maxLength="1"
                  onKeyUp={(e) => {
                    e.preventDefault();
                    if (e.target.value.length > 1) {
                      setValue(
                        "box2",
                        e.target.value.slice(
                          e.target.value.length - 1,
                          e.target.value.length
                        )
                      );
                      return false;
                    } else {
                      onKeyUpEvent(2, e);
                    }
                  }}
                  onFocus={onFocusEvent(2)}
                />
              </div>
              <div className="otp-number">
                <input
                  type="number"
                  id="box3"
                  {...register("box3")}
                  maxLength="1"
                  onKeyUp={(e) => {
                    e.preventDefault();
                    if (e.target.value.length > 1) {
                      setValue(
                        "box3",
                        e.target.value.slice(
                          e.target.value.length - 1,
                          e.target.value.length
                        )
                      );
                      return false;
                    } else {
                      onKeyUpEvent(3, e);
                    }
                  }}
                  onFocus={onFocusEvent(3)}
                />
              </div>
              <div className="otp-number">
                <input
                  type="number"
                  id="box4"
                  {...register("box4")}
                  maxLength="1"
                  onKeyUp={(e) => {
                    e.preventDefault();
                    if (e.target.value.length > 1) {
                      setValue(
                        "box4",
                        e.target.value.slice(
                          e.target.value.length - 1,
                          e.target.value.length
                        )
                      );
                      return false;
                    } else {
                      onKeyUpEvent(4, e);
                    }
                  }}
                  onFocus={onFocusEvent(1)}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            {setOTPError}
            {setOTPError ? (
              <span className="error-msg">{`Wrong OTP entered. Try again.`}</span>
            ) : null}

            <p className="text-gray">
              Did not receive OTP?{" "}
              <button
                className="text-color Resend-btn"
                onClick={(e) => {
                  e.preventDefault();
                  resendOTP();
                }}
              >
                Resend
              </button>
            </p>
          </div>

          <div className="col-12">
            <button
              className="button-active d-block w-100 px-4 mt-4 fw_7 otp-continue"
              onClick={handleSubmit(onSubmit)}
            >
              Continue
              <svg
                className="ml-2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z"
                  fill="#DE1A1B"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="row box-steps-dots">
        <div className="col-12">
          <div className="text-center mt-4">
            <ul className="list-inline steps-dots">
              <li className="list-inline-item active"></li>
              <li className="list-inline-item"></li>
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpStep;
