import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import { getPublications } from "../../Api";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [publication, setPublication] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  // const [showArrow, setShowArrow] = useState(null);

  let nextArrow = {
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
    // left: "1075px",
  };

  let prevArrow = {
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
    // left: "-75px",
  };

  const settings2 = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
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
        reviewNext={nextArrow}
        ARROW_NEXT={`assets/img/right-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),
    prevArrow: (
      <PrevArrow
        reviewPrev={prevArrow}
        ARROW_PREW={`assets/img/left-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),

    // nextArrow: (
    //   <NextArrow
    //     reviewNext={nextArrow}
    //     ARROW_NEXT={
    //       currentIndex < publication.length
    //         ? `assets/img/right-arrow-black.png`
    //         : "assets/img/right_arrow.png"
    //     }
    //     ARROW_SIZE={currentIndex < publication.length ? "20px" : "12px"}
    //   />
    // ),
    // prevArrow: (
    //   <PrevArrow
    //     reviewPrev={prevArrow}
    //     ARROW_PREW={
    //       currentIndex == 1
    //         ? `assets/img/left_arrow.png`
    //         : `assets/img/left-arrow-black.png`
    //     }
    //     ARROW_SIZE={currentIndex == 1 ? "12px" : "20px"}
    //   />
    // ),
  };

  useEffect(() => {
    const getPublication = async () => {
      let data = await getPublications({ start: 0, limit: 10 });
      console.log(data);
      console.log("publication.length", publication.length);
      setPublication(data);
    };
    getPublication();
  }, []);

  let renderItems = publication.map((p) => {
    return (
      <div className="p-3" key={p.id}>
        <div className="cards">
          <div className="d-flex justify-content-between">
            <span className="text-danger text-fwb fw-bold">{p.title}</span>
            <span
              className="text-70 ms-auto text-fwb"
              style={{ marginLeft: "70px" }}
            >
              {new Date(p.publish_at).getFullYear()}
            </span>
          </div>
          <p className="text-description mt-4 fw_4">
            {p.description.length > 150
              ? `${p.description.substring(0, 100)}...`
              : p.description}
          </p>

          {/* fix bug 5   */}

          <div
            className="text-70 d-flex mt-auto justify-content-between"
            style={{ fontSize: "14px", position: "absolute", bottom: "20px " }}
            // onMouseEnter={(e) => {
            //   setShowArrow(p.id);
            // }}
            // onMouseLeave={(e) => {
            //   setShowArrow(null);
            // }}
          >
            {/* {showArrow === p.id ? (
              <img
                src="assets/img/red_next_arrow.png"
                style={{ marginLeft: "auto",marginTop:"2px",width:"20px",height:"20px"}}
                onClick={(e) => {
                  window.open("http://google.com");
                }}
              />
            ) : null} */}
            <div className="fs_16">
              {/* <img
                src="assets/img/bookmark.png"
                width="7%"
                className="d-inline me-2 my-auto"
              /> */}

              <svg
                width="17"
                height="17"
                style={{ marginTop: "-3px" }}
                className="mr-2"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0851 0H2.01216C0.905471 0 0 0.9 0 2V18C0 19.1 0.905471 20 2.01216 20H14.0851C15.1918 20 16.0973 19.1 16.0973 18V2C16.0973 0.9 15.1918 0 14.0851 0ZM2.01216 2H7.04255V10L4.52736 8.5L2.01216 10V2Z"
                  fill="#DE1A1B"
                />
              </svg>

              {p.type}
            </div>
            {p.url && (
              <div className="review_arrow">
                <Link to={{ pathname: p.url }} target="_blank">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4543 8.27861L8.0845 1.72705L9.76363 1.70713e-06L19 9.5L9.76362 19L8.0845 17.2729L14.4543 10.7214L-1.87459e-06 10.7214L-1.44748e-06 8.2786L14.4543 8.27861Z"
                      fill="#DE1A1B"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      // <div className="p-3" key={p.id}>
      //   <div className="cards">
      //     <div className="d-flex">
      //       <span className="text-danger text-fwb fw-bold">{p.title}</span>
      //       <span className="text-70 ms-auto text-fwb">
      //         {new Date(p.publish_at).getFullYear()}
      //       </span>
      //     </div>
      //     <p className="text-description mt-4">
      //       {p.description.length > 150
      //         ? `${p.description.substring(0, 150)}...`
      //         : p.description}
      //     </p>
      //     <span
      //       className="text-70 d-flex mt-auto"
      //       onMouseEnter={(e) => {
      //         setShowArrow(p.id);
      //       }}
      //       onMouseLeave={(e) => {
      //         setShowArrow(null);
      //       }}
      //     >
      //       <img
      //         src="assets/img/bookmark.png"
      //         width="8%"
      //         className="d-inline me-2 my-auto"
      //       />
      //       {p.type}
      //       {showArrow === p.id ? (
      //       <img
      //         src="assets/img/red_next_arrow.png"
      //         style={{ marginLeft: "auto" }}
      //         onClick={(e) => {
      //           window.open("http://google.com");
      //         }}
      //       />
      //       ) : null}
      //     </span>
      //   </div>
      // </div>
    );
  });

  return <Slider {...settings2}>{renderItems}</Slider>;
};

export default Reviews;
