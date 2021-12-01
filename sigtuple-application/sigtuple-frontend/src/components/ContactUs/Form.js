import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { addContactUs } from "../../Api";
import 'react-toastify/dist/ReactToastify.css';

const ContactSchema = yup.object().shape({
    name: yup.string().required("Please Enter Name").min(3,"Please Enter Minimum 3 Charecter for Name"),
    companyName: yup.string().required("Please Enter Company Name").min(3,"Please Enter Minimum 3 Charecter for Name"),
    email: yup.string().required("Please Enter Email").matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please Provide valid Address"),
    phoneNo: yup.string().required("Please Enter Phone number"),
    message: yup.string().required("Please Enter Message").min(10,"Please Enter Atleast 10 Charecter for Message")
});

toast.configure()
const Form = ({setIsOpen}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(ContactSchema) });

    const onSubmit = (data) => {
        const addContact = async () => {
            let contact = await addContactUs(data)
            if (contact.type === false) {
                toast.error(contact.message,{position: "bottom-left"});

            }
            else {
                // toast.success(contact.message,{position: "bottom-left"});
                setIsOpen(true)
            }
            reset()
            console.log(contact)
        }
        addContact()
    }

    return (
        <div className="contact-area">
            <canvas className="bg-gradient-canvas3" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-10 col-12">
                        <div className="contact-section d-flex vh-100 flex-column justify-content-center">
                            <div className="text-center">
                                <div className="text-center blog-titles">
                                    <h2 className="text-title text-color fw_7 ls_5 text-uppercase fs_20">Contact Us</h2>
                                    <h1 className="fw_4 text-gray mt-4">
                                        <span className="fw_2">Ready for the</span> <br />
                                        <span className="fw_6"> Future of Pathology?</span>
                                    </h1>
                                    <p className="text-gray mt-3 fs_18 fw_3 ">Get in touch with us today to know how you can use AI to <br />transform the future of microscopy.</p>
                                    <div className="contact-from mt-5">
                                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className={`form-group mb-4 ${errors && errors.name ? `error-text` : ''}`}>
                                                        <input type="text" className="form-control" placeholder="Name" {...register('name')} />
                                                        {errors && errors.name ? <img src="assets/img/error.svg" alt="" className="error-icon" /> : null}
                                                        {errors && errors.name ? <span className="error-msg">{errors.name.message}</span> : null}
                                                    </div>
                                                    {/* <div className="form-group mb-4 error-text">
                                                    <input type="text" name="" className="form-control" placeholder="Name" required="" />
                                                    <img src="assets/img/error.svg" alt="" className="error-icon"></img>
                                                    <span className="error-msg">Please enter your name.*</span>
                                                </div>                                                 */}
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className={`form-group mb-4 ${errors && errors.companyName ? `error-text` : ''}`}>
                                                        <input type="text" className="form-control" placeholder="Company Name" {...register('companyName')} />
                                                        {errors && errors.companyName ? <img src="assets/img/error.svg" alt="" className="error-icon" /> : null}
                                                        {errors && errors.companyName ? <span className="error-msg">{errors.companyName.message}</span> : null}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className={`form-group mb-4 ${errors && errors.email ? `error-text` : ''}`}>
                                                        <input type="text" className="form-control" placeholder="Email" {...register('email')} />
                                                        {errors && errors.email ? <img src="assets/img/error.svg" alt="" className="error-icon" /> : null}
                                                        {errors && errors.email ? <span className="error-msg">{errors.email.message}</span> : null}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className={`form-group mb-4 ${errors && errors.phoneNo ? `error-text` : ''}`}>
                                                        <input type="text" className="form-control" placeholder="Phone Number" {...register('phoneNo')} />
                                                        {errors && errors.phoneNo ? <img src="assets/img/error.svg" alt="" className="error-icon" /> : null}
                                                        {errors && errors.phoneNo ? <span className="error-msg">{errors.phoneNo.message}</span> : null}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className={`form-group mb-4 ${errors && errors.message ? `error-text` : ''}`}>
                                                        <textarea name="" id="input" className="form-control m-textarea" rows="3" placeholder="Message" style={{ borderRadius: "25px" }} {...register('message')}></textarea>
                                                        {errors && errors.message ? <img src="assets/img/error.svg" alt="" className="error-icon" /> : null}
                                                        {errors && errors.message ? <span className="error-msg">{errors.message.message}</span> : null}
                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <input type="Submit" value="Submit" className="button-active d-inline-block px-4 mt-4 btn-continue pl-5 pr-5" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;