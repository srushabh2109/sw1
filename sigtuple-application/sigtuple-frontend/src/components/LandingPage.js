import React, { useRef, useState } from "react";
import MicroProduct from "./LandingPage/MicroProduct";
import VideoDescription from "./LandingPage/VideoDescription";
import Reviews from "./LandingPage/Reviews";
import Client from "./Client";
import Blogs from "./LandingPage/Blogs";
import Awards from "./LandingPage/Awards";
import ImageFooter from "./ImageFooter";
import SectionCounter from "./LandingPage/SectionCounter";
import "../css/LandingPage.css";
import { Link } from "react-router-dom";
import Shonit from "./LandingPage/Shonit";
import Shrava from "./LandingPage/Shrava";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

const LandingPage = () => {
  const [hoverStyle, setHoverStyle] = useState(null);
  const [tab, setTab] = useState("shonit");
  const ref = useRef();

  let HomeSlider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    swipeToSlide: false,
  };

  return (
    <>
      <Helmet>
        <title>SigTuple - Home Page </title>
      </Helmet>
      <div className="heor-area hero-banner">
        <canvas className="bg-gradient-canvas" />
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section  vh-100  ">
                <div className="m-auto text-center position-relative">
                  <div className="text homeslider-top">
                    <Slider {...HomeSlider}>
                      <div className="itemss">
                        <div className="">
                          <h1 className="m-0 fw_6">
                            The Future of Microscopy is Here!
                          </h1>
                          <center className="mt-3 fw_2">
                            <h2>
                              We are democratizing microscopy through AI,
                              robotics, and cloud computing
                            </h2>
                          </center>
                        </div>
                        <div className="large"></div>
                      </div>
                      <div className="itemss">
                        <div className="">
                          <h1 className="m-0 fw_6">
                            Making Pathologist’s life easier
                          </h1>
                          <center className="mt-3 fw_2">
                            <h2>
                              We remove the drudgery from routine microscopy so
                              that pathologists can spend <br /> time where it
                              matters – helping critical patients
                            </h2>
                          </center>
                        </div>
                        <div className="large"></div>
                      </div>
                      <div className="itemss">
                        <div className="">
                          <h1 className="fw_2">Transforming Pathology with </h1>
                          <h1 className="m-0 fw_6">AI-Powered Solutions</h1>
                          <center className="mt-3 fw_2">
                            <h2>
                              By replacing laborious manual microscopy with
                              AI-assisted digital pathology, we <br /> make the
                              diagnosis process faster, better, and cheaper
                            </h2>
                          </center>
                        </div>
                        <div className="large"></div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="m-auto text-center check-products">
                  <div
                    className="eye-section"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      ref.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    <span className="text-danger font-regular fw-bold">
                      Check our products
                    </span>
                    <div className="eye mt-2">
                      <img src="assets/img/eye.png" alt="" />
                    </div>
                  </div>
                  <div className="verticle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="procuct-area" ref={ref}>
        <canvas className="bg-gradient-canvas1" />
        <div className="container-fluid container-set position-relative">
          <div className="row mt-5 position-relative">
            <div className="col position-relative">
              <div className="text-center position-relative">
                <h2
                  className={`text-title text-center pb-3 position-relative ${
                    hoverStyle
                      ? `our_product_text_block`
                      : `our_product_text_none`
                  }`}
                >
                  Our<b> Products</b>
                </h2>
              </div>
              <div className="text-center ">
                <img
                  src="assets/img/AI100_2 1.png"
                  className="img-fluid position-relative"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="product-grid">
                <div
                  className="box-ProcuctLeft my-auto"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setHoverStyle("shonit");
                  }}
                >
                  <div className="ProcuctLeft">
                    <div
                      className={`blood ${
                        hoverStyle === "shonit"
                          ? `bg-transparent shadow-none`
                          : `bg-white`
                      }`}
                    >
                      <img src="assets/img/shonit.png" alt="" />
                    </div>
                    <div className="ProcuctLeft-description">
                      <div className="mt-3 ProcuctLeft-maintext">
                        <p
                          className={`${
                            hoverStyle === "shonit"
                              ? `text-description-hover`
                              : "text-description"
                          } m-0 text-start fw_2`}
                        >
                          Blood <br />
                          <span className="fw_6">Analyser</span>
                        </p>
                      </div>

                      <div
                        className={`mt-3 sub-description ${
                          hoverStyle === "shonit"
                            ? `sub-description-block`
                            : `sub-description-none`
                        }`}
                      >
                        <p className="m-0 text-start text-gray-1">
                          Shonit is an automated peripheral blood smear slide
                          analyzer
                        </p>
                        <Link to="/shonit">
                          <button className="d-block px-4 mt-3 explore text-start">
                            Explore{" "}
                            <svg
                              width="15"
                              height="15"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-ProcuctCenter my-auto">
                  <div className="slick-slider product-slider">
                    <MicroProduct hoverStyle={hoverStyle} />
                  </div>
                  <div className="position-relative mb-50">
                    <p className="text-description text-center mt-4">
                      The AI100 is an AI-driven smart robotic microscope.
                    </p>
                    <Link to="/products" className="hide-mobile">
                      <button className="d-block mx-auto px-4 explore">
                        Explore{" "}
                        <svg
                          width="15"
                          height="15"
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
                    </Link>
                  </div>

                  <div
                    className={`box-detailsproduct ${
                      hoverStyle ? `main-hover-flex` : `main-hover-none`
                    }`}
                    onMouseLeave={(e) => {
                      setHoverStyle(null);
                    }}
                  >
                    <div className="main-hover m-0 g-0">
                      {hoverStyle === "shonit" ? (
                        <div className="d-flex justify-content-between">
                          <div className="text-img w-50">
                            <img
                              src="assets/img/product_shonit_hover.png"
                              alt=""
                            />
                          </div>
                          <div className="text-hover col">
                            <p className="m-0">
                              Neutrophil <span>2</span>
                            </p>
                            <p className="m-0">Lymphocyte</p>
                            <p className="m-0">
                              Monocyte<span>1</span>
                            </p>
                            <p className="m-0">Basophils</p>
                            <p className="m-0">Eiosinophils</p>
                            <p className="m-0">IGs</p>
                            <p className="m-0">
                              Atypical/Blasts<span>3</span>
                            </p>
                          </div>
                        </div>
                      ) : hoverStyle === "shrava" ? (
                        <div className="d-flex justify-content-between">
                          <div className="text-img w-50">
                            <img
                              src="assets/img/product_shrava_hover.png"
                              alt=""
                            />
                          </div>
                          <div className="text-hover col">
                            <p className="m-0">
                              RBCs <span>2</span>
                            </p>
                            <p className="m-0">
                              Pus Cells <span>1</span>
                            </p>
                            <p className="m-0">Epithelial cells</p>
                            <p className="m-0">Casts</p>
                            <p className="m-0">Microscopic Organisms</p>
                            <p className="m-0">Crystals</p>
                            <p className="m-0">Yeast</p>
                          </div>
                        </div>
                      ) : null}

                      {/* <div className="d-flex justify-content-between classified border-top">
                        <p className=" mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified<span>1</span></p>
                        <p className="mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">Rejected <span>7</span></p>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div
                  className="box-ProcuctRight my-auto"
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setHoverStyle("shrava");
                  }}
                >
                  <div
                    className={`ProcuctRight ${
                      hoverStyle === "shrava" ? `ProcuctRight-hover` : ``
                    }`}
                  >
                    <div
                      className={`blood ${
                        hoverStyle === "shrava"
                          ? `bg-transparent shadow-none`
                          : `bg-white`
                      }`}
                    >
                      <img src="assets/img/urine.png" alt="" />
                    </div>
                    <div className="ProcuctRight-description">
                      <div className="mt-3 ProcuctLeft-maintext">
                        <p
                          className={`${
                            hoverStyle === "shrava"
                              ? `text-description-hover`
                              : "text-description"
                          } m-0 text-start fw_2`}
                        >
                          Urine <br />
                          <span className="fw_6">Analyser</span>
                        </p>
                      </div>
                      <div
                        className={`mt-3 sub-description ${
                          hoverStyle === "shrava"
                            ? `sub-description-block`
                            : `sub-description-none`
                        }`}
                      >
                        <p className="text-start text-gray-1">
                          Shrava is an automated urine morphology analyzer
                        </p>
                        <Link to="/shrava">
                          <button className="d-block px-4 mt-3 explore text-start">
                            Explore{" "}
                            <svg
                              width="15"
                              height="15"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileproduct">
            <div className="mobileproduct-grid mt-4 mx-auto ">
              <div className="ProcuctLeft mx-auto">
                <Link to="/shonit">
                  <div className="ProcuctLeft-img ">
                    <img src="assets/img/shonit.png" />
                  </div>
                  <div className="ProcuctLeft-description mx-auto">
                    <div className="mt-3 mx-4">
                      <p className="text-description m-0 text-start">
                        Blood <br />
                        <strong>Analyser</strong>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="ProcuctRight mx-auto">
                <Link to="/shrava">
                  <div className="ProcuctLeft-img ">
                    <img src="assets/img/urine.png" />
                  </div>
                  <div className="ProcuctRight-description mx-auto">
                    <div className="mt-3 mx-4">
                      <p className="text-description m-0 text-start">
                        Urine <br />
                        <strong>Analyser</strong>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_rounds"></div>
      </div>

      <SectionCounter />
      <VideoDescription />

      <div className="work-area work-area-home py-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="text-center  ">
                <h1 className="text-title text-center pb-3 fw_2 fs_48">
                  How does <span className="fw_6">AI100 work?</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-12 mx-auto mt-4">
              <div className="d-flex mb-3">
                <ul className="nav nav-pills mb-3 mx-auto">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link px-5 nav-link-1 ${
                        tab === "shonit" ? "active" : ""
                      }`}
                      type="button"
                      onClick={(e) => {
                        setTab("shonit");
                      }}
                    >
                      Shonit
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link px-5 nav-link-2 ${
                        tab === "shrava" ? "active" : ""
                      }`}
                      type="button"
                      onClick={(e) => {
                        setTab("shrava");
                      }}
                    >
                      Shrava
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content work-tab-content">
                <div
                  className={`tab-pane fade position-relative ${
                    tab === "shonit" ? `active show` : ""
                  }`}
                >
                  <Shonit />
                  {/* <div className="work-box">
                    <div className="text_section_blood">Shonit <strong>in Action</strong></div>
                    <div className="blood image_section_blood"><img src="assets/img/shonit.png" alt=""/></div>
                  </div> */}
                </div>
                <div
                  className={`tab-pane fade position-relative ${
                    tab === "shrava" ? `active show` : ""
                  }`}
                >
                  <Shrava tab={tab} />
                  {/* <div className="work-box">
                    <div className="text_section_blood">Shrava <strong>in Action</strong></div>
                    <div className="blood image_section_blood"><img src="assets/img/urine.png" alt=""/></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-100">
        <h1 className="text-title text-center pb-3">
          How does
          <b> AI100 work?</b>
        </h1>
        <div className="col-8 mx-auto mt-4">
          <div className="d-flex mb-3">
            <ul
              className="nav nav-pills mb-3 mx-auto"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-5 active nav-link-1"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                Shonit
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-5 nav-link-2"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Shrava
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <Shonit />
            <Shrava />
          </div>
        </div>
      </div> */}

      <div className="Extensive-area py-100">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center  ">
                <h1 className="text-title text-center pb-3 fw_2 fs_48">
                  Bringing Speed &amp; Precision with{" "}
                  <span className="fw_6">Extensive R&amp;D</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-10 col-12 mx-auto bg-white mt-5">
              <div className="slick-slider Extensive-slider">
                <Reviews />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-5">
              <Link
                to="/research"
                className="text-decoration-none text-danger fw-bold text-fwb"
              >
                View All
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "5px", marginTop: "-3px" }}
                >
                  <path
                    d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z"
                    fill="#DE1A1B"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-100 review">
        <h1 className="text-title text-center">
          Bringing Speed & Precision with
          <b> Extensive R&D</b>
        </h1>
        <div className="col-xxl-9 col-10 mx-auto bg-white mt-5">
          <Reviews />
        </div>
        <div className="col-12 text-center mt-5">
          <a
            href=""
            className="text-decoration-none text-danger fw-bold text-fwb"
          >
            View All
            <img src="assets/img/red_next_arrow.png" style={{ margin: "5px", paddingBottom: "5px", height: "25px" }} />
          </a>
        </div>
      </div> */}

      <Client />

      {/* <div className="container-fluid our-client d-flex">
        <div className="container my-auto">
          <div className="row mx-auto">
            <h1 className="text-title text-center">
              From
              <b> Our Clients</b>
            </h1>
            <div className="col-xxl-9 col-10 mx-auto mt-5 position-relative">
              <img src="assets/img/cot.png" className="cot" />
              <Client />
            </div>
          </div>
        </div>
      </div> */}

      <div className="Brewing-area">
        <div className="container py-100">
          <div className="row">
            <div className="col">
              <div className="text-center  ">
                <h1 className="text-title text-center pb-2 fw_2 fs_48">
                  Know <span className="fw_6">What’s Brewing</span>
                </h1>
                <p className="text-description fw_3 fs_22 lss_3">
                  Get access to the breakthroughs we make in our research and
                  innovation every day.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-10 col-12 mx-auto bg-white mt-5">
              <div className="slick-slider brewing-slider">
                <Blogs />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-100">
          <h1 className="text-title text-center">
            Know
            <b> What’s Brewing</b>
          </h1>
          <p className="text-description text-center">
            Get access to the breakthroughs we make in our research and innovation
            every day.
          </p>
          <div className="col-xxl-10 col-11 mx-auto bg-white mt-5">
            <Blogs />
          </div>
        </div> */}

      <div className="awards-area award client-after d-flex">
        <canvas className="bg-gradient-canvas5" />
        <div className="container">
          <div className="row">
            <div className="col position-relative z3">
              <div className="text-center  ">
                <h1 className="text-title text-center pb-3 fw_2 fs_48">
                  Awards &amp; <span className="fw_6">Recognitions</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 mx-auto mt-70">
            <div className="slick-slider awards-slider">
              <Awards />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid award d-flex">
                <div className="container my-auto">
                  <h1 className="text-title text-center">
                    Awards &<b> Recognitions</b>
                  </h1>
                  <div className="col-12 mx-auto mt-5">
                    <Awards />
                  </div>
                </div>
              </div> */}
      <ImageFooter />
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default LandingPage;
