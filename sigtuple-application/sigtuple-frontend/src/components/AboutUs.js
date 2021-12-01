import { useEffect, useState } from "react";
import ImageFooter from "./ImageFooter";
import Counters from "./Products/Counters";
import Stories from "./AboutUs/Stories";
import { getTeams, getTeamCounts, getStories } from "../Api";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
// import teams from "../contents_json/teams";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import _ from "lodash";

const AboutUs = () => {
  const [teams, setTeams] = useState([]);
  const [tab, setTab] = useState(null);
  const [hoverText, setHoverText] = useState(null);
  const [story, setStory] = useState([]);
  const [images, setImages] = useState({});
  const [storyYear, setStoryYear] = useState(2015);
  const [showFad, setFad] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      gsap.registerPlugin(ScrollTrigger);
      //round 2
      const text = document.querySelectorAll(".resizeMe2 > *");
      const tl = gsap
        .timeline()
        .to(".resizeMe2", {})
        .fromTo(text, { y: 0, opacity: 0 }, { y: 0, stagger: 0.3, opacity: 1 });
      ScrollTrigger.create({
        trigger: ".holdMeAbout2",
        animation: tl,
        pin: true,
        start: "center center",
        scrub: 2,
      });
    }
  }, []);

  useEffect(() => {
    let getStory = async () => {
      let data = await getStories({ year: storyYear });
      let arr = _.uniqBy(story.concat(data), (f) => {
        return f.id;
      });
      setStory(arr);
    };
    getStory();
  }, [storyYear]);

  useEffect(() => {
    console.log(storyYear);
    console.log(story);
    let previousImage = story.find((f) => {
      return parseInt(f.year) === storyYear - 1;
    });
    let activeImage = story.find((f) => {
      return parseInt(f.year) === storyYear;
    });
    let nextImage = story.find((f) => {
      return parseInt(f.year) === storyYear + 1;
    });

    let image = {
      previous:
        previousImage && previousImage.image && previousImage.image.length
          ? previousImage.image[0].url
          : null,
      current:
        activeImage && activeImage.image && activeImage.image.length
          ? activeImage.image[0].url
          : null,
      next:
        nextImage && nextImage.image && nextImage.image.length
          ? nextImage.image[0].url
          : null,
    };

    console.log(image);

    setImages(image);
  }, [story]);

  // const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    const getTeam = async () => {
      let data = await getTeams();
      // if (data.length === 4) {
      //     let count = await getTeamCounts()
      //     if (count <= 4) setHasMore(false)
      //     else setHasMore(true)
      // }
      setTeams(data);
      setTab(data[0]);
    };
    getTeam();
  }, []);

  // const getTeamDetails = () => {
  //     const getTeam = async () => {
  //         let data = await getTeams({ start: `${teams.length}`, limit: 4 })
  //         let blogs = teams.concat(data)
  //         setTeams(blogs)
  //         let count = await getTeamCounts()
  //         if (count <= blogs.length) setHasMore(false)
  //         else setHasMore(true)
  //     }
  //     getTeam()
  // }

  let renderTeams = teams.map((t) => {
    return (
      <li
        key={t.id}
        onClick={(e) => {
          console.log("t", t);
          setTab(t);
        }}
      >
        <span
          className={`d-flex align-items-center ${
            tab && tab.id === t.id ? `core-active` : ""
          }`}
        >
          <div className="">
            <img
              src={`${
                t.profilepic && t.profilepic[0]
                  ? t.profilepic[0]?.url
                  : `assets/img/carbon_user-avatar-filled.png`
              }`}
              alt=""
              className="img-fluid"
              width="70px"
            />
            {/* <img src={`${t.profilepic && t.profilepic[0] ? t.profilepic[0].url : `assets/img/carbon_user-avatar-filled.png`}`} alt="" className="img-fluid" width="60px" /> */}
          </div>
          <div className="text-gray mt-3 ml-4">
            <h6 className="mb-1 fw_6 fs_18">{t.name}</h6>
            <p>{t.position}</p>
          </div>
        </span>

        {/* <div className="Core-team-details">
          <div className="Core-team-details-list">
            <p className="text-gray">
              {tab && tab.description ? tab.description.slice(0, 315) : null}
            </p>
            {tab && tab.description && tab.description.length > 315 ? (
              <p className="text-gray">
                {" "}
                {tab.description.slice(315, tab.description.length)}
              </p>
            ) : null}
          </div>
        </div> */}
      </li>
    );
  });

  let renderStorys = story.map((s) => {
    return (
      <div className="item" key={s.id}>
        <div className="row align-items-center">
          <div className="col-md-9">
            <div className="Story-year-list">
              <h1 className="text-color fw_6 fs_82">{s.year}</h1>
              <div className="Story-year-text mt-4">
                {s.stories.map((ss) => {
                  return (
                    <div className="d-flex Story-month-data">
                      <div className="Story-month">
                        <span className="text-gray fw_6 fs_18">
                          {Object.keys(ss)}
                        </span>
                      </div>
                      <div className="Story-month-description">
                        <span className="text-gray fs_18">
                          {Object.values(ss)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  let slider_settings = {
    // arrows: true,
    // dots: false,
    // infinite: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    // swipeToSlide: false,
    // adaptiveHeight:true

    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    // vertical: true,
    verticalSwiping: true,
    //adaptiveHeight:true,
    afterChange: (current) => {
      setStoryYear(2015 + current);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>SigTuple-About US</title>
      </Helmet>
      <div className="Careers-area">
        <canvas className="bg-gradient-canvas1" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-12">
              <div className="Careers-section d-flex vh-100 flex-column justify-content-center">
                <div className="text-center">
                  <div className="text-center text-mobile optiontitle">
                    {/* <span className="text-color text-small-name fw_bold fs_18">About us</span> */}
                    <h2 className="text-title text-color fw_8 fs_24 mb-20">
                      About us
                    </h2>
                    <h1 className="fw_4 text-gray mt-4">
                      <span className="fw_3">Amplifying reach, speed and </span>
                      <span className="fw_6">accuracy of Healthcare.</span>
                    </h1>
                    <p className="text-gray mt-3 fs_18 fw_2 plr-150 ">
                      The microscopic examination continues to be the gold
                      standard for diagnosing several critical diseases.
                      Unfortunately, microscopy is an entirely manual process,
                      suffering from common pitfalls of inconsistency and
                      inefficiency. With only 1 qualified pathologist per
                      million people, this problem can only get worse over time.
                    </p>
                    <p className="text-gray mt-3 fs_18 fw_2 plr-150 mt-2">
                      SigTuple democratizes microscopy by automating it through
                      advanced AI and robotics. AI-assisted digital microscopy,
                      enabled through the cloud, takes the drudgery out of the
                      current process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counters />
      <div className="text-center check-products">
        <div className="verticle"></div>
        <div className="eye-section">
          <span className="text-danger font-regular fw-bold"></span>
        </div>
      </div>
      <div className="mission-area">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 col-12">
              <div className="mission-text">
                <span className="text-color ls_4 fw_7 fs_24">MISSION</span>
                <h6 className="text-gray mt-2 fw_6  fs_18 line_text">
                  To democratize microscopy by enabling AI-assisted remote
                  review unhindered by geographical boundaries
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-12 order-md-last order-first">
              <div className="mission-images">
                <img
                  src="assets/img/mission.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center visiton-box">
            <div className="col-md-6 col-12">
              <div className="mission-images">
                <img src="assets/img/vision.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="mission-text visiton-texts">
                <span className="text-color ls_4 fw_7 fs_24">VISION</span>
                <h6 className="text-gray mt-2 fw_6  fs_18 line_text">
                  To be a global leader in the automation of manual processes in
                  clinical laboratories
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Story-area">
        <div className="container ">
          <div className="row align-items-center justify-content-center Story-top-title">
            <div className="col-md-12 text-center optiontitle">
              <h2 className="text-title text-color fw_8 fs_24 mb-20">
                The Story
              </h2>
            </div>
          </div>
          <div className="row justify-content-center Story-vh ">
            <div className="col-md-9 col-12">
              <div className="story-box story-grid">
                <div className="Story-left-slider">
                  <div className="story-slider">
                    <Slider {...slider_settings}>{renderStorys}</Slider>
                  </div>
                </div>
                <div className="storyright-image">
                  <div className="storyright-image-box">
                    <div className="slider-images">
                      <img
                        src={
                          images.previous
                            ? images.previous
                            : `assets/img/blank.png`
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="slider-images active">
                      <img
                        src={
                          images.current
                            ? images.current
                            : `assets/img/blank.png`
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="slider-images">
                      <img
                        src={images.next ? images.next : `assets/img/blank.png`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="values-area"
        onMouseEnter={(e) => {
          e.preventDefault();
          setFad(true);
        }}
      >
        <canvas className="bg-gradient-canvas4" />
        <div className="container">
          <div className="row align-items-center justify-content-center solutions-vh vh-100">
            <div>
              <div className="col-12">
                <div className="text-center">
                  <h1 className="text-title fw_6 text-gray">
                    Our values <span className="fw_2">keep us focused!</span>
                  </h1>
                </div>
              </div>
              <div
                className={`col-md-9 col-12 mx-auto mt-80 ${
                  showFad ? `solve_be_provide` : "solve_be_provide_none"
                }`}
              >
                <div className="values-grid  grid-3 mt-80">
                  <div className="values-list">
                    <div className="values-text text-gray mt-3">
                      <h5 className="text-color text-uppercase fs_32 fw_8 ls_7">
                        Solve
                      </h5>
                      <p className="text-gray">
                        real clinical problems affecting billions of lives
                        across the globe.
                      </p>
                    </div>
                  </div>
                  <div className="values-list value-center">
                    <div className="values-text text-gray mt-3">
                      <h5 className="text-color text-uppercase fs_32 fw_8 ls_7">
                        Be
                      </h5>
                      <p className="text-gray">
                        the market leader in innovation with the primary focus
                        on R&D and provide continuing value to the customer
                      </p>
                    </div>
                  </div>
                  <div className="values-list pl-50">
                    <div className="values-text text-gray mt-3">
                      <h5 className="text-color text-uppercase fs_32 fw_8 ls_7">
                        Provide
                      </h5>
                      <p className="text-gray">
                        great quality at an affordable price
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coreteam-area ptb-150">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center optiontitle">
                <h2 className="text-title text-color fw_8 fs_24">The Core</h2>
                <h1 className="text-gray fw_6">Our Team</h1>
                <p className="text-gray mt-4 fs_18 fw_3 ">
                  Meet our team of visionary leaders who are creating a real
                  <br /> impact on the healthcare world today
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 col-md-12 col-12 mx-auto">
              <div className="Core-grid grid-2">
                <div className="Core-list">
                  <div className="Core-team-list">
                    <ul className="m-0">{renderTeams}</ul>
                  </div>
                </div>
                <div className="Core-list">
                  <div className="Core-team-details core-hide-mobile">
                    <div className="Core-team-details-list">
                      <div className="rightteam-name mt-3">
                        <h4 className="m-0 text-gray fw_6">
                          {tab && tab.name ? tab.name : null}
                        </h4>
                        <p className="m-0 mt-2 text-gray fs_20">
                          {tab && tab.position ? tab.position : null}
                        </p>
                      </div>
                      {/* fix bug no.6  */}
                      {tab && tab.id == 8 && (
                        <p className="text-gray">
                          {" "}
                          {
                            <div
                              dangerouslySetInnerHTML={{ __html: tab.desc3 }}
                            ></div>
                          }
                        </p>
                      )}
                      <p className="text-gray">{tab?.description}</p>
                      <p className="text-gray">{tab?.desc2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Investors-area ptb-150">
        <canvas className="bg-gradient-canvas5" />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center optiontitle">
                <h2 className="text-title text-color fw_8 fs_24 mb-20">
                  Our Investors
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 col-12 mx-auto">
              <div className="Investors-grid grid-4">
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/05.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/02.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/06.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/07.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/01.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/03.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/04.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="Investors-list">
                  <div className="Investors-img">
                    <img
                      src="assets/img/investors/08.png"
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
      <ImageFooter />
    </>
  );
};

export default AboutUs;
