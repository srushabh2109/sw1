import Step1 from "./BookDemo/Step1";
// import OtpStep from "./BookDemo/OtpStep";
import Step2 from "./BookDemo/Step2";
import Step3 from "./BookDemo/Step3";
import Step4 from "./BookDemo/Step4";
import { useEffect, useRef, useState } from "react";
import { sendOtp, addBookings } from "../Api";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";
import moment from "moment";
import StepWizard from "react-step-wizard";
import Slider from "react-slick";

const BookDemo = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState("step1");
  const [userDetails, setUserDetails] = useState({});
  const [meetingDetails, setMeetingDetails] = useState({});
  const [message, setMessage] = useState({});
  const sliderRef = useRef();
  // // const [OTPStatus,setOTPStatus]=useState(false)
  // const [OTP,setOTP]=useState(false)

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    console.log(userDetails);
    // console.log(OTPStatus)

    if (!_.isEmpty(userDetails)) {
      setStep("step2");
    }

    // if(userDetails && userDetails.phone_no){
    //     const sendOtpFunction = async () =>{
    //         if(!OTP){
    //             let data=await sendOtp({phone_no:userDetails.phone_no})
    //             if(data.type){
    //                 toast.success("OTP has been sent to your mobile",{position: "bottom-left"});
    //                 setOTP(true)
    //                 setStep("otp")
    //             }
    //             else{
    //                 toast.error("Please provide valid phone number",{position: "bottom-left"});
    //             }
    //         }
    //     }
    //     sendOtpFunction()
    // }
  }, [userDetails]);

  // useEffect(()=>{
  //     if(OTPStatus){
  //         setStep('step2')
  //     }
  // },[OTPStatus])

  useEffect(() => {
    if (!_.isEmpty(meetingDetails)) {
      console.log("meetingDetails", meetingDetails);
      setStep("step3");
    }
  }, [meetingDetails]);

  useEffect(() => {
    if (!_.isEmpty(message)) {
      console.log("message", message);
      setStep("step4");
    }
  }, [message]);

  useEffect(() => {
    // if(!_.isEmpty(userDetails) && OTPStatus && !_.isEmpty(meetingDetails) && _.isEmpty(message)){
    if (
      !_.isEmpty(userDetails) &&
      !_.isEmpty(meetingDetails) &&
      !_.isEmpty(message)
    ) {
      let storeInfo = {
        name: userDetails.name,
        email: userDetails.email,
        country: userDetails.country,
        product: userDetails.product,
        phone_no: userDetails.phone_no,
      };
      let date = moment(meetingDetails.date).format("YYYY-MM-DD");
      let dateTime = moment(
        date + " " + moment(meetingDetails.time, "HH:mm").format("HH:mm")
      ).format("YYYY-MM-DD HH-mm-ss");
      storeInfo.book_at = dateTime;
      let extraInfo = {
        timeZoneDetails: meetingDetails.timeZoneDetails,
        message: message,
      };

      const addBooking = async () => {
        let data = await addBookings({ storeInfo, extraInfo });
        console.log(data);
      };

      addBooking();
    }
  }, [step]);

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      style={{
        display: `${isOpen ? "block " : "none"}`,
        backgroundColor: "rgba(0, 0, 0, 0.47)",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <span
            className="close-popup"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              setStep("step1");
              window.location.reload();
            }}
          >
            <img src="assets/img/close.png" className="img-fluid" alt="" />
          </span>
          <div className="area-book-demo">
            <div className="book-demo-grid">
              <div className="demo-grid-left p-5">
                <div className="model-logo">
                  <div className="">
                    <img
                      src="assets/img/logo.png"
                      className="img-fluid"
                      alt="Logo"
                      width="140"
                    />
                  </div>
                  <div className="bookademo-left-text-title">
                    <h2 className="text-title fw_2">
                      Book a <span className="fw_6"> Demo</span>{" "}
                    </h2>
                    <p className="fw_3 text-gray">
                      Get a virtual demo of our products from our experts!
                    </p>
                  </div>
                  <div className="book-demo-img">
                    <img
                      src="assets/img/book_demo_step1.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="demo-grid-right">
                <Slider {...sliderSettings} ref={sliderRef}>
                  <Step1
                    setStep={setStep}
                    isOpen={isOpen}
                    setUserDetails={setUserDetails}
                    sliderRef={sliderRef}
                  />
                  <Step2
                    setMeetingDetails={setMeetingDetails}
                    sliderRef={sliderRef}
                  />
                  <Step3 setMessage={setMessage} sliderRef={sliderRef} />
                  <Step4 email={userDetails ? userDetails.email : null} />
                </Slider>
              </div>
            </div>
            {/* <Slider {...sliderSettings} ref={sliderRef}>
              <Step1
                setStep={setStep}
                isOpen={isOpen}
                setUserDetails={setUserDetails}
                sliderRef={sliderRef}
              />
              <Step2
                setMeetingDetails={setMeetingDetails}
                sliderRef={sliderRef}
              />
              <Step3 setMessage={setMessage} sliderRef={sliderRef} />
              <Step4 email={userDetails ? userDetails.email : null} />
            </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
