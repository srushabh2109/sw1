import moment from "moment";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NextArrow from "../components/Arrow/NextArrow";
import PrevArrow from "../components/Arrow/PrevArrow";

import { getPublications, getPublicationCounts } from "../Api";

const filterData = [
  "All",
  "Medical",
  "Computer Vision",
  "Artificial Intelligence",
  "Microscopy",
  "Microfludics",
];

const ResearchPage = () => {
  const [dropDownYear, setDropDownYear] = useState([]);
  const [selectYear, setSeleteYear] = useState(new Date().getFullYear());
  const [publication, setPublication] = useState([]);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [selectedType, setSelectedType] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(1);
  const ref = useRef();

  let blog_next = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "66px",
    height: "66px",
    position: "absolute",

    opacity: currentIndex < publication.length ? "0.5" : "0.1",
    border: "3px solid rgb(112, 112, 112)",
    boxSizing: "border-box",
    borderRadius: "41px",
    right: "-90px",
  };

  let blog_prev = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "66px",
    height: "66px",
    position: "absolute",

    opacity: currentIndex === 1 ? "0.1" : "0.5",
    border: "3px solid rgb(112, 112, 112)",
    boxSizing: "border-box",
    borderRadius: "41px",
    left: "-90px",
  };

  const settings_blog = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false,
        },
      },
    ],
    afterChange: (current) => {
      console.log(currentIndex, current);
      if (current === 0) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(current + 3);
      }
      console.log(currentIndex, current);
    },
    nextArrow: (
      <NextArrow
        blogNext={blog_next}
        ARROW_NEXT={`assets/img/right-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),
    prevArrow: (
      <PrevArrow
        blogPrev={blog_prev}
        ARROW_PREW={`assets/img/left-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),

    // nextArrow: <NextArrow blogNext={blog_next} ARROW_NEXT={currentIndex < blogLen ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex <  blogLen ? "20px" : "12px"}/>,
    // prevArrow: <PrevArrow blogPrev={blog_prev} ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"}/>
  };

  useState(() => {
    let intiallYear = moment("2016-01-01").format("YYYY");
    let currentYear = moment().format("YYYY");
    let dropdownYearArr = [];
    for (let i = intiallYear; i <= currentYear; i++) {
      dropdownYearArr.push(i);
    }
    setDropDownYear(dropdownYearArr);

    const getPublication = async () => {
      let data = await getPublications({
        year: new Date().getFullYear(),
      });

      // let perGroup = Math.ceil(data.length / 4);
      // console.log(
      //   new Array(4)
      //     .fill("")
      //     .map((_, i) => data.slice(i * perGroup, (i + 1) * perGroup))
      // );
      setPublication(data);

      let publicationCount = await getPublicationCounts({
        year: new Date().getFullYear(),
      });
      setCount(publicationCount);
    };

    getPublication();
  }, []);

  const getPublication = async (year) => {
    let data = await getPublications({ year });
    // console.log(data);
    console.log("publication.length", publication.length);
    setPublication(data);

    let publicationCount = await getPublicationCounts({ year });
    setCount(publicationCount);
  };

  const getPublicationDetails = async (fields) => {
    let data = await getPublications({
      year: fields.year,
    });
    setPublication(data);
  };

  let renderPublication = publication.map((p) => {
    return (
      <div className="col-md-4 p-3">
        <div className="cards" key={p.id}>
          <div className="d-flex">
            <span className="text-danger text-fwb fw-bold">{p.title}</span>
            <span className="text-70 ml-auto text-fwb">
              {new Date(p.publish_at).getFullYear()}
            </span>
          </div>
          <p className="text-description mt-4">
            {p.description.length > 150
              ? `${p.description.substring(0, 100)}...`
              : p.description}
          </p>
          <div className="d-flex justify-content-between  mt-auto">
            <span className="text-70 d-flex ">
              <img
                src="assets/img/bookmark.png"
                width="15px"
                className="d-inline me-2 my-auto mr-2"
              />
              {p.type}
            </span>
            <span>
              {p.url && (
                <Link to={{ pathname: p.url }} target="_blank">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6935 7.62525L7.659 1.59075L9.24975 0L18 8.75025L9.24975 17.5005L7.659 15.9097L13.6935 9.87525H0V7.62525H13.6935Z"
                      fill="#DE1A1B"
                    ></path>
                  </svg>{" "}
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>SigTuple - Research </title>
      </Helmet>

      <div className="Research-area">
        <canvas className="bg-gradient-canvas3" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 ">
              <div className="Research-section d-flex vh-100 flex-column justify-content-center">
                <div className="text-center">
                  <div className="text-center blog-titles">
                    <span className="text-color text-small-name fw_bold fs_24">
                      Research
                    </span>
                    <h1 className="fw_4 text-gray mt-4">
                      <span className="fw_2">
                        Bringing Speed & Precision with{" "}
                      </span>
                      <span className="fw_6">Extensive R&D</span>
                    </h1>
                    <p className="text-gray mt-3 fs_18 fw_3  ">
                      SigTuple liaises with both healthcare providers and
                      academic institutions to <br /> publish cutting-edge
                      research and contribute valuable insights
                    </p>
                  </div>
                </div>
                <div className="text-center check-products">
                  <div className="verticle"></div>
                  <div className="eye-section">
                    <span className="text-danger font-regular fw-bold"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-area Publications ptb-150">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center optiontitle">
                <h2
                  className="text-title text-color fw_8 fs_24 mb-20"
                  ref={ref}
                >
                  Publications
                </h2>
                <p className="text-gray mt-4 fs_18 fw_3 ls_1 line_height_20">
                  SigTuple liaises with both healthcare providers and academic
                  institutions to <br /> publish cutting-edge research and
                  contribute valuable insights
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-12 mx-auto mt-5">
              <form className="form row align-items-center justify-content-center">
                <div className="col-md-12">
                  <div className="box-yeasrbtn">
                    <ul className="box-yeasrbtn-ul list-inline m-0">
                      {filterData.map((item) => (
                        <li
                          className="box-yeasrbtn-li"
                          onClick={setSelectedType.bind(this, item)}
                        >
                          <span
                            className={
                              selectedType === item
                                ? "yeasrbtns yeasrbtns-active"
                                : "yeasrbtns"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-12 mt-80">
                  <div className="row Publicationslists align-items-center justify-content-center">
                    {<Slider {...settings_blog}>{renderPublication}</Slider>}
                  </div>
                </div>

                {/* <div className="col-md-8 col-12 mx-auto mt-80">
                  <div className="text-center pagination">
                    {count ? (
                      <ReactPaginate
                        previousLabel={
                          pageCount === 0 ? (
                            <svg
                              width="59"
                              height="59"
                              viewBox="0 0 59 59"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginTop: "-15px" }}
                            >
                              <g opacity="0.2">
                                <path
                                  d="M24.5457 30.7214L30.9155 37.2729L29.2364 39L20 29.5L29.2364 20L30.9155 21.7271L24.5457 28.2786L39 28.2786L39 30.7214L24.5457 30.7214Z"
                                  fill="#707070"
                                />
                                <rect
                                  x="57.5"
                                  y="57.5"
                                  width="56"
                                  height="56"
                                  rx="28"
                                  transform="rotate(180 57.5 57.5)"
                                  stroke="#707070"
                                  strokeWidth="3"
                                />
                              </g>
                            </svg>
                          ) : (
                            <svg
                              width="59"
                              height="59"
                              viewBox="0 0 59 59"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginTop: "-15px" }}
                            >
                              <g opacity="0.5">
                                <path
                                  d="M24.5457 30.7214L30.9155 37.2729L29.2364 39L20 29.5L29.2364 20L30.9155 21.7271L24.5457 28.2786L39 28.2786L39 30.7214L24.5457 30.7214Z"
                                  fill="#707070"
                                />
                                <rect
                                  x="57.5"
                                  y="57.5"
                                  width="56"
                                  height="56"
                                  rx="28"
                                  transform="rotate(180 57.5 57.5)"
                                  stroke="#707070"
                                  strokeWidth="3"
                                />
                              </g>
                            </svg>
                          )
                        }
                        nextLabel={
                          pageCount === Math.ceil(count / 6) ||
                          pageCount === Math.ceil(count / 6) - 1 ? (
                            <svg
                              width="59"
                              height="59"
                              viewBox="0 0 59 59"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginTop: "-15px" }}
                            >
                              <g opacity="0.2">
                                <path
                                  d="M34.4542 28.2786L28.0845 21.7271L29.7636 20L39 29.5L29.7636 39L28.0845 37.273L34.4542 30.7214L20 30.7214L20 28.2786L34.4542 28.2786Z"
                                  fill="#707070"
                                />
                                <rect
                                  x="1.5"
                                  y="1.5"
                                  width="56"
                                  height="56"
                                  rx="28"
                                  stroke="#707070"
                                  strokeWidth="3"
                                />
                              </g>
                            </svg>
                          ) : (
                            <svg
                              width="59"
                              height="59"
                              viewBox="0 0 59 59"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginTop: "-15px" }}
                            >
                              <g opacity="0.5">
                                <path
                                  d="M34.4542 28.2786L28.0845 21.7271L29.7636 20L39 29.5L29.7636 39L28.0845 37.273L34.4542 30.7214L20 30.7214L20 28.2786L34.4542 28.2786Z"
                                  fill="#707070"
                                />
                                <rect
                                  x="1.5"
                                  y="1.5"
                                  width="56"
                                  height="56"
                                  rx="28"
                                  stroke="#707070"
                                  strokeWidth="3"
                                />
                              </g>
                            </svg>
                          )
                        }
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(count / 6)}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        onPageChange={(e) => {
                          setPageCount(e.selected);
                          getPublicationDetails({
                            start: e.selected,
                            year: selectYear || new Date().getFullYear(),
                          });
                          ref.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                      />
                    ) : null}
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
