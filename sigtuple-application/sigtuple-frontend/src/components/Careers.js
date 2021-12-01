import { useEffect, useRef, useState } from "react";
import career_json from "../contents_json/careers";
import { getOpenings, getTeams } from "../Api";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import teams from "../contents_json/teams";

const Careers = () => {
  const [teams, setTeams] = useState([]);
  const [code, setCode] = useState(career_json[0]);
  const [openings, setOpenings] = useState([]);
  const ref = useRef();
  useEffect(() => {
    const getOpening = async () => {
      let data = await getOpenings();
      setOpenings(data);
    };
    getOpening();

    const getTeam = async () => {
      let data = await getTeams();
      setTeams(data);
    };
    getTeam();
  }, []);

  let renderTeams = teams.map((t) => {
    return (
      <div className="experts-list text-center" key={t.id}>
        <div className="experts-img">
          <img
            src={`${
              t.profilepic && t.profilepic[0]
                ? t.profilepic[0]?.url
                : `assets/img/carbon_user-avatar-filled.png`
            }`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="experts-text text-gray mt-3">
          <h6 className="mb-1 fw_6">{t.name}</h6>
          <p className="fs_13 text_gray">{t.position}</p>
        </div>
      </div>
    );
  });

  let renderItems = openings.map((o) => {
    return (
      <div className="Positions-list" key={o.id}>
        <a href="" className="text-gray">
          <p className="m-0 d-flex justify-content-between align-items-center">
            <span className="fs_22 fe_8">{o.title}</span>
            <Link to={{ pathname: `${o.url}` }} target="_blank">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6427 8.27861L8.27298 1.72705L9.9521 1.70713e-06L19.1885 9.5L9.9521 19L8.27297 17.2729L14.6427 10.7214L0.188475 10.7214L0.188475 8.2786L14.6427 8.27861Z"
                    fill="#DE1A1B"
                  />
                </svg>
              </span>
            </Link>
          </p>
          <p className="m-0 fw_3">{o.experience}</p>
          <p className="m-0 fw_3">{o.location}</p>
        </a>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>SigTuple-Career</title>
      </Helmet>
      <div className="Careers-area">
        <canvas className="bg-gradient-canvas3" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-10 col-12">
              <div className="Careers-section d-flex vh-100 flex-column justify-content-center">
                <div className="text-center">
                  <div className="text-center ">
                    <h2 className="text-title text-color fw_7 ls_5 text-uppercase fs_24">
                      Careers
                    </h2>
                    <h1 className="fw_4 text-gray mt-4 line_height_70">
                      <span className="fw_2">Join us. Invent with us.</span>{" "}
                      <br />
                      <span className="fw_6">Grow with us.</span>
                    </h1>
                    <p className="text-gray mt-3 fs_18 fw_3 m_space">
                      At SigTuple, working is more than just a job, it's a
                      calling to discover, to invent, to bring a revolution in
                      pathology. Here, we don't just do something better but
                      attempt to create things the world has never thought
                      about.
                    </p>
                    <button
                      className="d-block mx-auto px-4 explore plr-30 mt-4"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        ref.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      See Openings
                    </button>
                  </div>
                </div>
                <div className="text-center check-products">
                  <div className="eye-section">
                    <span className="text-danger font-regular fw-bold"></span>
                  </div>
                  <div className="verticle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Values-area d-flex ptb-100">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="text-left Growth-data">
                <h1 className="text-title fw_2 fs_38">
                  Growth-oriented <spam className="fw_6">Values & Culture</spam>
                </h1>
                <p className="text-gray fw_3">
                  Our culture is born from our values when put into action.
                  SigTuple's team members are essential to the success stories
                  of its work in transforming path diagnosis. We strive to
                  empower our teams by creating rewarding careers at SigTuple,
                  driven by a culture of commitment and collaboration.
                </p>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="Values-img">
                <img
                  src="assets/img/career_01.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experts-area">
        <canvas className="bg-gradient-canvas4" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-title fw_2">
                  At SigTuple, you work{" "}
                  <span className="fw_6">with the experts</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="experts-grid grid-6 mt-80">{renderTeams}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="Positions-area py-100" ref={ref}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center optiontitle">
                <h2 className="text-title text-color fw_8 fs_24 mb-20">
                  Open Positions
                </h2>
                {openings && openings.length ? (
                  <p className="text-gray mt-4 fs_18 fw_3 ">
                    So, are you ready to lead in this era of technology and help
                    empower the <br /> healthcare industry with AI?
                  </p>
                ) : (
                  <p className="text-gray mt-4 fs_18 fw_3 ls_2">
                    If you are unable to find a suitable opening please do not
                    worry. We are always up to discover new talents, kindly mail
                    us your resume to info@SigTuple.com
                  </p>
                )}
              </div>
            </div>
          </div>
          <div
            className={`row ${
              openings.length === 1
                ? `justify-content-center align-items-center`
                : ""
            }`}
          >
            <div
              className={`${
                openings.length === 1 ? `col-md-6` : "col-md-11"
              } col-12 mx-auto`}
            >
              <div
                className={`Positions-grid ${
                  openings.length === 1 ? ` grid-1` : "grid-2"
                } ptb-100`}
              >
                {renderItems}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Code-area ptb-150">
        <canvas className="bg-gradient-canvas5" />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center optiontitle">
                <h2 className="text-title text-color fw_8 fs_24 mb-20">
                  Our Code
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-12 mx-auto mt-5">
              <div className="Code-box-data">
                <div className="Code-top">
                  <ul className="list-inline m-0 d-flex justify-content-between">
                    <li className="list-inline-item">
                      <span
                        className={`code-name ${
                          code.title === "Raise the bar" ? `Code-active` : ""
                        }`}
                        onClick={(e) => {
                          let data = career_json.find((f) => {
                            return f.id == 1;
                          });
                          setCode(data);
                        }}
                      >
                        <img
                          src={
                            code.title === "Raise the bar"
                              ? `${code.image}`
                              : `assets/img/code/icon_01.png`
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <span>Raise</span>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span
                        className={`code-name ${
                          code.title ===
                          "Superlative is impossible without collaborative"
                            ? `Code-active`
                            : ""
                        }`}
                        onClick={(e) => {
                          let data = career_json.find((f) => {
                            return f.id === 2;
                          });
                          setCode(data);
                        }}
                      >
                        <img
                          src={
                            code.title ===
                            "Superlative is impossible without collaborative"
                              ? `${code.image}`
                              : `assets/img/code/icon_02.png`
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <span>Superlative</span>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span
                        className={`code-name ${
                          code.title === "Innovate to impact"
                            ? `Code-active`
                            : ""
                        }`}
                        onClick={(e) => {
                          let data = career_json.find((f) => {
                            return f.id === 3;
                          });
                          setCode(data);
                        }}
                      >
                        <img
                          src={
                            code.title === "Innovate to impact"
                              ? `${code.image}`
                              : `assets/img/code/icon_03.png`
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <span>Innovate</span>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span
                        className={`code-name ${
                          code.title === "Transform to enrich"
                            ? `Code-active`
                            : ""
                        }`}
                        onClick={(e) => {
                          let data = career_json.find((f) => {
                            return f.id === 4;
                          });
                          setCode(data);
                        }}
                      >
                        <img
                          src={`${
                            code.title === "Transform to enrich"
                              ? `${code.image}`
                              : `assets/img/code/icon_04.png`
                          }`}
                          className="img-fluid"
                          alt=""
                        />
                        <span>Transform</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="Code-bottom">
                  <div className="Code-data">
                    <div className="Code-data-list d-flex">
                      <div className="Code-data-first">
                        <div className="d-flex Code-data-first-box">
                          <div className="Code-data-first-image">
                            <img
                              src={`${code.image}`}
                              className="mr-3 img-fluid"
                              width="60px"
                            />
                          </div>
                          <div className="Code-data-first-text">
                            <h2 className="fw_6">
                              <span className="text-color">
                                {code.title.split(" ")[0]}
                              </span>
                              <br />
                              <span className="text-gray">
                                {code.title.slice(
                                  code.title.split(" ")[0].length,
                                  code.title.length
                                )}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="Code-right grid-2">
                        <div className="Code-data-second">
                          <p className="text-gray m-0 fs_18">
                            {code.description_left}
                          </p>
                        </div>
                        <div className="Code-data-third">
                          <p className="text-gray m-0 fs_18">
                            {code.description_right}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-area py-100">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center optiontitle">
                <h2 className="text-title text-color fw_8 fs_24 mb-20">
                  Fun At Work
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 col-12 mx-auto mt-5">
              <div className="funatwork">
                <div className="fun-left">
                  <div className="fun-box-top">
                    <div className="fun-left-top-first">
                      <img
                        src="assets/img/fun/1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="fun-left-top-two">
                      <img
                        src="assets/img/fun/2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="fun-box-bottom">
                    <div className="fun-left-bottom-first">
                      <img
                        src="assets/img/fun/4.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="fun-left-bottom-two">
                      <img
                        src="assets/img/fun/5.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="fun-right">
                  <div className="fun-box">
                    <div className="fun-right-first">
                      <img
                        src="assets/img/fun/3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="fun-right-two">
                      <img
                        src="assets/img/fun/6.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Careers;
