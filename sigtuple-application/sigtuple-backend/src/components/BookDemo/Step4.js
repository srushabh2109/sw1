import { useEffect } from "react/cjs/react.development";

const Step4 = ({ email }) => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  return (
    <div className="book-steps steps-four">
      <div className="book-steps-form">
        <form className="form">
          <div className="">
            <img
              src="assets/img/thankyou.png"
              className="img-fluid"
              alt="thankyou"
            />
            <h3 className="text-title mt-4">
              Thank<b> You!</b>
            </h3>
            <p>We are eager to give you a virtual product demo.</p>
          </div>
          <div className="row mt-50">
            <p className="mb-0">We’ve sent a confirmation email to</p>
            <a href="" className="text-color fw_7">
              {email}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step4;
