// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useEffect, useState } from "react";
import _ from "lodash";
// const userSchema = yup.object().shape({
//     name: yup.string().required("Please Enter Name").min(3, "Please Enter Minimum 3 Charecter for Name"),
//     country: yup.string().required("Please Select any country"),
//     email: yup.string().required("Please Enter Email").matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please Provide valid Address"),
//     // phone_no: yup.string().required("Please Enter Phone number"),
//     // product: yup.string().required("Please Select any country"),
// });

const Step1 = (props) => {
  const { setUserDetails, isOpen, sliderRef } = props;
  console.log(sliderRef);
  // const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(userSchema) });

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [companyErr, setCompanyErr] = useState("");
  const [designationErr, setDesignationErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [countryErr, setCountryErr] = useState(false);
  const [productErr, setProductErr] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (_.isEmpty(name)) {
      setNameErr("Please enter your name.*");
    }
    if (_.isEmpty(company)) {
      setCompanyErr("Please enter your Company name.*");
    }
    if (_.isEmpty(designation)) {
      setDesignationErr("Please enter your designation.*");
    }
    if (_.isEmpty(email)) {
      setEmailErr("Invalid email address. Try again.*");
    }
    if (_.isEmpty(phoneNumber)) {
      setPhoneErr(true);
    }
    if (_.isEmpty(country) || (country && country === "Select Country")) {
      setCountryErr(true);
    }
    if (_.isEmpty(product) || (product && product === "Select Product")) {
      setProductErr(true);
    }

    if (name && name.length < 3) {
      setNameErr("Please Enter Minimum 3 Charecter");
    }

    if (email) {
      // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(email)) {
        setEmailErr("Invalid email address. Try again.*");
      }
    }

    if (
      !nameErr &&
      !companyErr &&
      !designationErr &&
      !emailErr &&
      !countryErr &&
      phoneNumber &&
      !phoneErr &&
      !productErr
    ) {
      setCountryErr(false);
      setPhoneErr(false);
      let obj = Object.assign(
        {},
        { name, company, designation, email, country, product },
        { phone_no: phoneNumber }
      );
      if (phoneNumber && !phoneErr) {
        setPhoneNumber(null);
        setUserDetails(obj);
        // props.nextStep();
      }
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    setPhoneNumber(null);
  }, [isOpen]);

  return (
    <div className="book-steps steps-one">
      <div className="book-steps-form">
        <form className="form ">
          <div className="stepsone-title">
            <h2 className="text-title ">
              Your <b> Details</b>
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className={`form-group mb-4 ${nameErr ? `error-text` : ""}`}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                    setNameErr("");
                  }}
                />
                {nameErr ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {nameErr ? <span className="error-msg">{nameErr}</span> : null}
              </div>
            </div>
            <div className="col-12">
              <div
                className={`form-group mb-4 ${companyErr ? `error-text` : ""}`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setCompany(e.target.value);
                    setCompanyErr("");
                  }}
                />
                {companyErr ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {companyErr ? (
                  <span className="error-msg">{companyErr}</span>
                ) : null}
              </div>
            </div>
            <div className="col-12">
              <div
                className={`form-group mb-4 ${
                  designationErr ? `error-text` : ""
                }`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  onChange={(e) => {
                    e.preventDefault();
                    setDesignation(e.target.value);
                    setDesignationErr("");
                  }}
                />
                {designationErr ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {designationErr ? (
                  <span className="error-msg">{designationErr}</span>
                ) : null}
              </div>
            </div>
            <div className="col-12">
              <div
                className={`form-group mb-4 ${emailErr ? `error-text` : ""}`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                    setEmailErr("");
                  }}
                />
                {emailErr ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {emailErr ? (
                  <span className="error-msg">{emailErr}</span>
                ) : null}
              </div>
            </div>
            {/* <div className="col-12">
              <div
                className={`form-group mb-4 ${countryErr ? `error-text` : ""}`}
              >
                <select
                  className="selectpicker form-control"
                  name="country"
                  onChange={(e) => {
                    e.preventDefault();
                    setCountry(e.target.value);
                    setCountryErr(false);
                  }}
                >
                  <option value="Select Country">Select Country</option>
                  <option value="India">India </option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">
                    Bosnia & Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">
                    British Indian Ocean Ter
                  </option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">
                    French Southern Ter
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">
                    Netherland Antilles
                  </option>
                  <option value="Netherlands">
                    Netherlands (Holland, Europe)
                  </option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">
                    Republic of Montenegro
                  </option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">
                    St Pierre & Miquelon
                  </option>
                  <option value="St Vincent & Grenadines">
                    St Vincent & Grenadines
                  </option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">
                    Sao Tome & Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">
                    United Arab Emirates
                  </option>
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">
                    Virgin Islands (Brit)
                  </option>
                  <option value="Virgin Islands (USA)">
                    Virgin Islands (USA)
                  </option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                {countryErr ? (
                  <span className="error-msg">{`Please select a country.*`}</span>
                ) : null}
              </div>
            </div> */}
            <div className="col-12">
              <div
                className={`form-group mb-4 ${phoneErr ? `error-text` : ""}`}
              >
                <IntlTelInput
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                  placeholder="Contact Number"
                  style={{ width: "470px" }}
                  //separateDialCode={true}
                  onPhoneNumberChange={(isValid, phone, country) => {
                    console.log(country);
                    if (!isValid) setPhoneErr(true);
                    else {
                      setPhoneErr(false);
                      let number = `+${country.dialCode}${phone}`;
                      setPhoneNumber(number);
                    }
                  }}
                  autoFocus={true}
                  autoComplete={true}
                />
                {phoneErr || phoneNumber ? (
                  <img
                    src="assets/img/error.svg"
                    alt=""
                    className="error-icon"
                  />
                ) : null}
                {phoneErr || phoneNumber ? (
                  <span className="error-msg">
                    Invalid phone number. Try again.*
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-12">
              <div
                className={`form-group mb-4 ${productErr ? `error-text` : ""}`}
              >
                <select
                  className="selectpicker form-control"
                  name="product"
                  onChange={(e) => {
                    e.preventDefault();
                    setProduct(e.target.value);
                    setProductErr(false);
                  }}
                >
                  <option value="Select Product">Select Product</option>
                  <option value="Shonit">Shonit</option>
                  <option value="Shrava">Shrava</option>
                </select>
                {productErr}
                {productErr || !product ? (
                  <span className="error-msg">{`Please select a product.*`}</span>
                ) : null}
              </div>
            </div>
            <div className="col-12" onClick={onSubmit}>
              <button className="button-active d-block w-100 px-4 fw_7 btn-continue">
                Continue
                <svg
                  className="ml-3"
                  width="14"
                  height="14"
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

export default Step1;
