import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react/cjs/react.development";

const contactSchema = yup.object().shape({
  message: yup
    .string()
    .required("Please Enter Message")
    .min(10, "Please Enter Atleast 10 Charecter"),
});

const Step3 = ({ setMessage, sliderRef }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema) });

  // useEffect(() => {
  //   if (document && document.body) {
  //     document.body.style.overflow = "hidden";

  //     return () => {
  //       document.body.style.overflow = "unset";
  //     };
  //   }
  // }, []);

  const onSubmit = (data) => {
    setMessage(data);
    reset();
    sliderRef.current.slickNext();
  };

  return (
    <div className="book-steps steps-three">
      <div className="book-steps-form">
        <form className="form mt-4 ">
          <div className="">
            <h3 className="text-title fw_2">
              Any <span className="fw_6">message</span> for us?
            </h3>
          </div>
          <div className="row mt-40">
            <div className="col-12">
              <div
                className={`form-group mb-4 ${
                  errors && errors.message ? `error-text` : ""
                }`}
              >
                <textarea
                  name=""
                  id="input"
                  className="form-control"
                  rows="8"
                  placeholder="Type message"
                  style={{ borderRadius: "15px" }}
                  {...register("message")}
                ></textarea>
                {errors && errors.message ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {errors && errors.message ? (
                  <span className="error-msg">{errors.message.message}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              className="button-active d-block w-100 px-4 mt-2 fw_7 message-continue"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="row box-steps-dots">
          <div className="col-12">
            <div className="text-center mt-4">
              <ul className="list-inline steps-dots">
                <li className="list-inline-item "></li>
                <li className="list-inline-item "></li>
                <li className="list-inline-item active"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
