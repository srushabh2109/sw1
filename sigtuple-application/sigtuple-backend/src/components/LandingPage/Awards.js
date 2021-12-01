import React, { useState } from "react";
import Slider from "react-slick";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  let award_next = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "66px",
    height: "66px",
    position: "absolute",

    opacity: currentIndex < 4 ? "0.5" : "0.1",
    border: "3px solid rgb(112, 112, 112)",
    boxSizing: "border-box",
    borderRadius: "41px",
  };

  let award_prev = {
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
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    afterChange: (current) => {
      console.log(currentIndex, current);
      if (current == 0) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(current + 3);
      }
      console.log(currentIndex, current);
    },
    nextArrow: (
      <NextArrow
        awardNext={award_next}
        ARROW_NEXT={`assets/img/right-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),
    prevArrow: (
      <PrevArrow
        awardPrev={award_prev}
        ARROW_PREW={`assets/img/left-arrow-black.svg`}
        ARROW_SIZE={"20px"}
      />
    ),

    // nextArrow: <NextArrow ARROW_NEXT={currentIndex < 6 ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex < 6 ? "20px" : "12px"}/>,
    // prevArrow: <PrevArrow ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"}/>
  };

  return (
    <Slider {...settings2}>
      <div className="awards-slider-item">
        <div className="text-center plr-80">
          <img src="assets/img/award-1.png" className="pb-2 img-fluid" />
          {/* <hr className="my-3" />
          <p className="text-description mb-0 text-fwb fw-bold text-center">Winner</p>
          <p className="text-description text-center mb-0">AI healthcare Category</p> */}
        </div>
      </div>

      <div className="awards-slider-item">
        <div className="text-center plr-80">
          <img src="assets/img/award-2.png" className="pb-2 img-fluid" />
          {/* <hr className="my-3" />
          <p className="text-description mb-0 text-fwb fw-bold text-center">Winner</p>
          <p className="text-description text-center mb-0">AI healthcare Category</p> */}
        </div>
      </div>

      <div className="awards-slider-item">
        <div className="text-center plr-80">
          <img src="assets/img/award-3.png" className="pb-2 img-fluid" />
          {/* <hr className="my-3" />
          <p className="text-description mb-0 text-fwb fw-bold text-center">Winner</p>
          <p className="text-description text-center mb-0">AI healthcare Category</p> */}
        </div>
      </div>

      <div className="awards-slider-item">
        <div className="text-center plr-80">
          <img src="assets/img/award-1.png" className="pb-2 img-fluid" />
          {/* <hr className="my-3" />
          <p className="text-description mb-0 text-fwb fw-bold text-center">Winner</p>
          <p className="text-description text-center mb-0">AI healthcare Category</p> */}
        </div>
      </div>
    </Slider>

    //     <div>
    //     <Slider {...settings2}>
    //     <div className="p-3 d-flex">
    //         <div className="w-200 mx-auto">
    //             <img src="assets/img/award-1.png" className="pb-2 awards_images"/>
    //             {/* <hr className="my-3"/>
    //             <p className="text-description mb-0 text-fwb fw-bold text-center">
    //                 Winner
    //             </p>
    //             <p className="text-description text-center mb-0">
    //                 AI healthcare Category
    // </p> */}
    //         </div>
    //     </div>
    //     <div className="p-3 d-flex">
    //         <div className="w-200 mx-auto">
    //             <img src="assets/img/award-2.png" className="pb-2 awards_images"/>
    //             {/* <hr className="my-3"/>
    //             <p className="text-description mb-0 text-fwb fw-bold text-center">
    //             Winner
    //         </p>
    //         <p className="text-description text-center mb-0">
    //             AI healthcare Category
    //         </p> */}
    //     </div>
    // </div>
    // <div className="p-3 d-flex">
    //     <div className="w-200 mx-auto">
    //         <img src="assets/img/award-3.png" className="pb-2 awards_images"/>
    //         {/* <hr className="my-3"/>
    //         <p className="text-description mb-0 text-fwb fw-bold text-center">
    //             Winner
    //         </p>
    //         <p className="text-description text-center mb-0">
    //             AI healthcare Category
    //         </p> */}
    // //     </div>
    // </div>
    // <div className="p-3 d-flex">
    //     <div className="w-200 mx-auto">
    //         <img src="assets/img/award-1.png" className="pb-2 awards_images"/>
    // {/* <hr className="my-3"/>
    // <p className="text-description mb-0 text-fwb fw-bold text-center">
    //     Winner
    // </p>
    // <p className="text-description text-center mb-0">
    //     AI healthcare Category
    // </p> */}
    //         </div>
    //     </div>
    //  </Slider>
    // </div>
  );
};
export default Awards;
