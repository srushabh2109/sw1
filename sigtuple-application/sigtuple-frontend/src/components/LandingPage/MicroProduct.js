import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
// import { useMediaQuery } from 'react-responsive';

const MicroProduct = ({ hoverStyle }) => {
  console.log(hoverStyle);
  const [currentIndex, setCurrentIndex] = useState(1);
  const ref = useRef();

  let ai_100_next = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px",

    position: "absolute",
    width: "35px",
    height: "35px",

    opacity: currentIndex < 3 ? "0.5" : "0.1",
    border: "2px solid #707070",
    boxSizing: "border-box",
    borderRadius: "41px",
    display: "none",
    // top: "-75px",
    // left: "650px"
  };
  let ai_100_prev = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px",

    position: "absolute",
    width: "35px",
    height: "35px",

    opacity: currentIndex == 1 ? "0.1" : "0.5",
    border: "2px solid #707070",
    boxSizing: "border-box",
    borderRadius: "41px",
    display: "none",
    // top: "-75px",
    // left: "364px"
  };

  const setting_ai100 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      console.log(currentIndex, current);
      if (current == 0) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(current + 1);
      }
      console.log(currentIndex, current);
    },
    nextArrow: (
      <NextArrow
        styleNext={ai_100_next}
        ARROW_NEXT={`assets/img/right-arrow-black.svg`}
        ARROW_SIZE={"15px"}
      />
    ),
    prevArrow: (
      <PrevArrow
        stylePrev={ai_100_prev}
        ARROW_PREW={`assets/img/left-arrow-black.svg`}
        ARROW_SIZE={"15px"}
      />
    ),

    // nextArrow: <NextArrow styleNext={ai_100_next} ARROW_NEXT={currentIndex < 3 ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex < 3 ? "20px" : "12px"} />,
    // prevArrow: <PrevArrow stylePrev={ai_100_prev} ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"} />
  };

  // useEffect(()=>{
  //     if(hoverStyle==='shonit')
  //     ref.current.slickGoTo(1)
  // },[setShonit])

  useEffect(() => {
    // if (hoverStyle === "shonit") {
    //   ref.current.slickGoTo(1);
    // }
    // if (hoverStyle === "shrava") {
    //   ref.current.slickGoTo(2);
    // }
  }, [hoverStyle]);

  return (
    <React.Fragment>
      {hoverStyle === null ? (
        <div className="">
          <div className="relative_microscope text-center">
            <img
              src="assets/img/microscope.png"
              className="img-fluid mx-auto"
            />
          </div>
        </div>
      ) : hoverStyle === "shonit" ? (
        <div className={`${hoverStyle === "shonit" ? "hover-sec" : ""}`}>
          <div className="relative_microscope text-center">
            <img
              src="assets/img/microscope_shonit.png"
              className="img-fluid mx-auto"
            />
          </div>
        </div>
      ) : hoverStyle === "shrava" ? (
        <div className={`${hoverStyle === "shrava" ? "hover-sec" : ""}`}>
          <div className="relative_microscope text-center">
            <img
              src="assets/img/microscope_shrava.png"
              className="img-fluid mx-auto"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
    // <Slider {...setting_ai100} ref={ref}>
    // </Slider>
    // <Slider {...setting_ai100} ref={ref}>
    //     <div>
    //         <div className="relative_microscope">
    //             <img src="assets/img/microscope.png" className="img-fluid mx-auto" />
    //             {/* <span className="microscope_text">
    //                 <img src="assets/img/AI100_small.png" style={{ height: "35px",width: "75px"}}/>
    //             </span> */}
    //         </div>
    //     </div>
    //     <div className={`${hoverStyle==='shonit' ? "hover-sec" : ""}`} active>
    //         <div className="relative_microscope">
    //             <img src="assets/img/microscope_shonit.png" className="img-fluid mx-auto" />
    //             {/* <span className="microscope_text">
    //                 <img src="assets/img/shonit.png" style={{ height: "55px",width: "90px"}}/>
    //             </span> */}
    //         </div>
    //         <div className={`${hoverStyle==='shonit' ? `main-hover row m-0 g-0 main-hover-flex` : `main-hover row m-0 g-0 main-hover-none`}`} onMouseEnter={(e=>{
    //             setHoverStyle("shonit")
    //         })}
    //         onMouseLeave={(e=>{
    //             setHoverStyle(null)
    //         })}>
    //             <div className="text-img">
    //                 <img src="assets/img/circle-dot.png" />
    //                 <div className="text-hover col">
    //                     <p className="text-description mt-auto ps-3">Neutrophil <span>2</span></p>
    //                     <p className="text-description mt-auto ps-3">Lymphocyte</p>
    //                     <p className="text-description mt-auto ps-3">Monocyte<span>1</span></p>
    //                     <p className="text-description mt-auto ps-3">Neutrophil</p>
    //                     <p className="text-description mt-auto ps-3">Lymphocyte</p>
    //                     <p className="text-description mt-auto ps-3">Monocyte</p>
    //                 </div>
    //             </div>
    //             <div className="col-12 d-flex classified border-top">
    //                 <p className="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified
    //                     <span>1</span>
    //                 </p>
    //                 <p className="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">
    //                     Rejected <span>7</span></p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={`${hoverStyle==='shrava' ? "hover-sec" : ""}`}>
    //         <div className="relative_microscope">
    //             <img src="assets/img/microscope_shrava.png" className="img-fluid mx-auto" />
    //             {/* <span className="microscope_text">
    //             <img src="assets/img/urine.png" style={{ height: "50px",width: "83px"}}/>
    //             </span> */}
    //         </div>
    //         <div className={`${hoverStyle==='shrava' ? `main-hover row m-0 g-0 main-hover-flex` : `main-hover row m-0 g-0 main-hover-none`}`} onMouseEnter={(e=>{
    //             setHoverStyle("shrava")
    //         })}
    //         onMouseLeave={(e=>{
    //             setHoverStyle(null)
    //         })}>
    //             <div className="text-img">
    //                 <img src="assets/img/circle-dot.png" />
    //                 <div className="text-hover col">
    //                     <p className="text-description mt-auto ps-3">Neutrophil <span>2</span></p>
    //                     <p className="text-description mt-auto ps-3">Lymphocyte</p>
    //                     <p className="text-description mt-auto ps-3">Monocyte<span>1</span></p>
    //                     <p className="text-description mt-auto ps-3">Neutrophil</p>
    //                     <p className="text-description mt-auto ps-3">Lymphocyte</p>
    //                     <p className="text-description mt-auto ps-3">Monocyte</p>
    //                 </div>
    //             </div>
    //             <div className="col-12 d-flex classified border-top">
    //                 <p className="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified
    //                     <span>1</span>
    //                 </p>
    //                 <p className="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">
    //                     Rejected <span>7</span></p>
    //             </div>
    //         </div>

    //     </div>

    // </Slider>
  );
};

export default MicroProduct;
