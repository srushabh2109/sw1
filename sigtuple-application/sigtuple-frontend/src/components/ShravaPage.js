import Benefits from "./Products/Benefits";
import Client from "./Client";
import ImageFooter from "./ImageFooter";
import BookDemo from "./BookDemo";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { getVideos } from "../Api";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ShravaPage = () => {
  const [show, setShow] = useState(true);
  const [video, setVideo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(-1);

  const parentRef = useRef();
  const sliderRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    setCurrentSlide(-1);
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    const getVideo = async () => {
      let data = await getVideos({ type: "Shrava" });
      setVideo(data);
    };
    getVideo();
    if (window.innerWidth >= 1024) {
      gsap.registerPlugin(ScrollTrigger);
      //round 2
      const text = document.querySelectorAll(".resizeMe2 > *");
      const tl = gsap
        .timeline()
        .to(".resizeMe2", { width: 150, height: 150 })
        .fromTo(
          text,
          { y: 100, opacity: 0 },
          { y: 0, stagger: 0.3, opacity: 1 }
        );
      ScrollTrigger.refresh();
      ScrollTrigger.create({
        trigger: ".holdMeShrava2",
        animation: tl,
        pin: true,
        start: "center center",
        //end: '+=1500 bottom',
        scrub: 2, // I like the 1 sec delay, set to true for exact anime on scroll
        // markers: true,
        invalidateOnRefresh: true,
        snap: true,
      });
    }
  }, []);

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    if (window.innerWidth >= 991) {
      parentRef.current.addEventListener("wheel", (e) => handleScroll(e));
    }

    return () => {
      parentRef &&
        parentRef.current &&
        parentRef.current.removeEventListener("wheel", (e) => handleScroll(e));
    };
  }, [parentRef]);

  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      sliderRef && sliderRef.current.slickPrev();
    } else {
      sliderRef && sliderRef.current.slickNext();
    }
    let scroolValue = sliderRef.current.innerSlider.track.props.currentSlide;
    setCurrentSlide(scroolValue);
  };

  let shrava_settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
  };

  let product_settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: false,
  };

  return (
    <>
      <Helmet>
        <title>SigTuple-Shrava</title>
      </Helmet>
      <BookDemo isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="product-area">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="Product-text-area d-flex flex-column">
                <div className="mt-auto text-center Product-text">
                  <div className="logo_svg">
                    {/* <svg width="180" height="71" viewBox="0 0 259 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.2166 8.63519C21.8176 7.91898 22.9126 7.88817 23.5532 8.56944C25.6167 10.7637 29.7636 16.5495 36.0854 26.0326C38.5311 29.7013 40.8789 34.0593 43.1323 39.108C48.2176 50.5012 43.0643 63.8421 31.6219 68.9056C28.7232 70.1884 25.5863 70.8512 22.4141 70.8512C10.0351 70.8512 0 60.8591 0 48.5332C0 45.598 0.581496 42.6916 1.71119 39.9804C3.33201 36.0906 4.85909 32.8461 6.29615 30.2428C10.4126 22.7857 15.3866 15.583 21.2166 8.63519ZM22.4361 12.0466C17.2381 18.4023 12.7701 24.9665 9.03121 31.7397C7.65451 34.2336 6.17417 37.3788 4.59391 41.1713C3.62152 43.5049 3.12099 46.0067 3.12099 48.5332C3.12099 59.1428 11.7588 67.7436 22.4141 67.7436C25.1496 67.7436 27.8547 67.172 30.3544 66.0658C40.2216 61.6993 44.6656 50.195 40.2803 40.3701C38.0942 35.4723 35.828 31.2657 33.4851 27.7512C28.3308 20.0196 24.6304 14.7646 22.4361 12.0466Z" fill="#DE1A1B" />
                                        <path d="M14.0568 59.9987C9.66877 58.9972 6.24757 55.4896 5.376 51.0871C5.20932 50.2452 4.38874 49.6972 3.54317 49.8631C2.69761 50.0291 2.14726 50.8462 2.31394 51.6881C3.42384 57.2945 7.77204 61.7525 13.3595 63.0278C14.1995 63.2195 15.0366 62.6969 15.2292 61.8604C15.4217 61.024 14.8968 60.1905 14.0568 59.9987Z" fill="#DE1A1B" />
                                        <path d="M47.7743 13.7754C49.2184 15.9416 50.6186 18.5407 51.9714 21.5716C54.5791 27.4139 51.9365 34.255 46.069 36.8515L45.0925 37.2521L46.069 40.1751L47.3365 39.6913C54.7791 36.3977 58.1311 27.7202 54.8234 20.3095C53.4033 17.1277 51.9215 14.3772 50.3746 12.0568C44.5342 3.29585 44.4283 3.14118 42.7533 1.10085C42.5971 0.910504 42.4412 0.72456 42.2851 0.542207C41.6844 -0.159305 40.6094 -0.179777 39.9675 0.478909C37.53 2.97991 33.8254 8.40944 30.9258 13.3682L32.9174 16.1381C33.3569 15.4042 33.7303 14.7956 34.0374 14.3121C37.1198 9.45937 39.4781 6.00043 41.0739 3.97668C42.1302 5.31218 43.0491 6.6873 47.7743 13.7754Z" fill="#DE1A1B" />
                                        <path d="M246.526 9.26036V13.7918H244.96V9.26036H242.5V8H248.99V9.26036H246.526ZM257.396 13.7918V9.72404L255.244 13.7918H253.742L251.59 9.72404V13.7918H250.024V8H252.151L254.493 12.3839L256.835 8H258.953V13.7918H257.396Z" fill="#DE1A1B" />
                                        <path d="M85.9265 13.5054V17.5484H85.1274C83.3399 17.5484 82.1541 17.8703 81.5697 18.5141C80.9854 19.1579 80.6932 20.5957 80.6932 22.8275C80.6932 27.3255 80.5987 30.1668 80.4096 31.3514C80.1003 33.1884 79.5718 34.6047 78.8242 35.6004C78.0766 36.5962 76.9036 37.4803 75.3052 38.2529C77.1958 39.0426 78.5664 40.2486 79.4171 41.871C80.2679 43.4934 80.6932 46.1501 80.6932 49.8412C80.6932 53.189 80.7276 55.1804 80.7963 55.8156C80.9338 56.983 81.2819 57.7985 81.8404 58.2621C82.399 58.7256 83.4946 58.9573 85.1274 58.9573H85.9265V63.0004H84.4829C82.7986 63.0004 81.5783 62.863 80.8221 62.5884C79.7222 62.1935 78.8113 61.554 78.0895 60.6698C77.3676 59.7857 76.8993 58.6655 76.6845 57.3092C76.4696 55.953 76.3536 53.7297 76.3364 50.6395C76.3192 47.5493 76.1732 45.4119 75.8982 44.2273C75.6232 43.0427 75.0689 42.1071 74.2354 41.4204C73.4018 40.7336 72.3234 40.3731 71 40.3388V36.1412C72.3234 36.1069 73.4018 35.7507 74.2354 35.0725C75.0689 34.3944 75.6232 33.463 75.8982 32.2785C76.1732 31.0939 76.3192 29.0681 76.3364 26.201C76.3536 23.334 76.4052 21.4455 76.4911 20.5356C76.6458 19.0935 76.9337 17.9347 77.3547 17.0591C77.7758 16.1836 78.2957 15.484 78.9144 14.9603C79.5331 14.4367 80.3237 14.0376 81.2862 13.7629C81.9393 13.5912 83.0048 13.5054 84.4829 13.5054H85.9265ZM90.2913 20.2669C90.5079 20.2669 90.6162 20.3751 90.6162 20.5914C90.6162 20.7267 90.5214 20.9701 90.3319 21.3217C87.9763 25.7572 86.7985 31.3557 86.7985 38.1173C86.7985 44.987 87.9492 50.5043 90.2506 54.6694C90.4673 55.0751 90.5756 55.3456 90.5756 55.4808C90.5756 55.6701 90.4943 55.7648 90.3319 55.7648C90.1153 55.7648 89.6685 55.3321 88.9916 54.4666C87.2859 52.2488 85.8915 49.6186 84.8085 46.5759C83.7255 43.5332 83.184 40.7272 83.184 38.1578C83.184 32.6134 84.9845 27.2989 88.5855 22.2142C89.5061 20.916 90.0747 20.2669 90.2913 20.2669Z" fill="#DE1A1B" />
                                        <path d="M235.176 13.5044V17.5474H235.975C237.763 17.5474 238.948 17.8693 239.533 18.5131C240.117 19.1569 240.409 20.5947 240.409 22.8266C240.409 27.3246 240.504 30.1658 240.693 31.3504C241.002 33.1874 241.531 34.6037 242.278 35.5995C243.026 36.5952 244.199 37.4793 245.797 38.2519C243.907 39.0416 242.536 40.2477 241.685 41.87C240.835 43.4924 240.409 46.1491 240.409 49.8402C240.409 53.188 240.375 55.1794 240.306 55.8147C240.169 56.9821 239.821 57.7975 239.262 58.2611C238.704 58.7246 237.608 58.9564 235.975 58.9564H235.176V62.9994H236.62C238.304 62.9994 239.524 62.8621 240.28 62.5874C241.38 62.1925 242.291 61.553 243.013 60.6689C243.735 59.7847 244.203 58.6645 244.418 57.3083C244.633 55.952 244.749 53.7288 244.766 50.6385C244.783 47.5483 244.929 45.4109 245.204 44.2263C245.479 43.0417 246.034 42.1061 246.867 41.4194C247.701 40.7327 248.779 40.3721 250.103 40.3378V36.1403C248.779 36.1059 247.701 35.7497 246.867 35.0716C246.034 34.3934 245.479 33.4621 245.204 32.2775C244.929 31.0929 244.783 29.0671 244.766 26.2C244.749 23.333 244.697 21.4445 244.611 20.5346C244.457 19.0925 244.169 17.9337 243.748 17.0581C243.327 16.1826 242.807 15.483 242.188 14.9594C241.569 14.4357 240.779 14.0366 239.816 13.7619C239.163 13.5902 238.098 13.5044 236.62 13.5044H235.176ZM230.811 20.2659C230.595 20.2659 230.486 20.3741 230.486 20.5905C230.486 20.7257 230.581 20.9691 230.771 21.3207C233.126 25.7563 234.304 31.3547 234.304 38.1163C234.304 44.986 233.153 50.5033 230.852 54.6684C230.635 55.0741 230.527 55.3446 230.527 55.4798C230.527 55.6691 230.608 55.7638 230.771 55.7638C230.987 55.7638 231.434 55.3311 232.111 54.4656C233.817 52.2478 235.211 49.6176 236.294 46.5749C237.377 43.5322 237.919 40.7262 237.919 38.1568C237.919 32.6124 236.118 27.2979 232.517 22.2132C231.596 20.915 231.028 20.2659 230.811 20.2659Z" fill="#DE1A1B" />
                                        <path d="M111.115 34.1306C110.775 33.9651 110.326 33.7778 109.768 33.5687C109.21 33.3596 108.577 33.1615 107.871 32.9742C107.165 32.7869 106.397 32.6301 105.569 32.5037C104.74 32.3774 103.89 32.3143 103.018 32.3143C102.32 32.3143 101.725 32.336 101.232 32.3796C100.739 32.4232 100.325 32.4798 99.9893 32.5495C99.6536 32.6192 99.3876 32.6997 99.1914 32.7912C98.9951 32.8827 98.8447 32.9763 98.7401 33.0722C98.6354 33.168 98.5678 33.2638 98.5373 33.3596C98.5068 33.4555 98.4915 33.5426 98.4915 33.621C98.4915 33.8823 98.6223 34.111 98.884 34.307C99.1456 34.503 99.5031 34.6773 99.9566 34.8297C100.41 34.9822 100.938 35.1259 101.54 35.2609C102.141 35.396 102.78 35.5353 103.456 35.6791C104.132 35.8228 104.83 35.9796 105.549 36.1495C106.268 36.3194 106.966 36.5176 107.642 36.7441C108.318 36.9706 108.957 37.2341 109.558 37.5346C110.16 37.8352 110.688 38.1858 111.141 38.5866C111.595 38.9873 111.952 39.449 112.214 39.9717C112.476 40.4944 112.606 41.0911 112.606 41.7619C112.606 42.6244 112.454 43.3648 112.149 43.9834C111.843 44.6019 111.436 45.1246 110.925 45.5514C110.415 45.9783 109.824 46.3202 109.153 46.5772C108.481 46.8342 107.777 47.0324 107.04 47.1718C106.303 47.3112 105.558 47.4026 104.803 47.4462C104.049 47.4898 103.332 47.5115 102.651 47.5115C100.872 47.5115 99.2263 47.3656 97.7132 47.0738C96.2001 46.7819 94.8636 46.4182 93.7037 45.9827V41.6966C94.8985 42.3587 96.2611 42.877 97.7916 43.2516C99.3222 43.6262 100.96 43.8135 102.704 43.8135C103.733 43.8135 104.572 43.759 105.222 43.6501C105.872 43.5412 106.38 43.4019 106.746 43.232C107.112 43.0621 107.361 42.877 107.492 42.6766C107.622 42.4763 107.688 42.2846 107.688 42.1017C107.688 41.8142 107.557 41.5637 107.295 41.3503C107.034 41.1369 106.676 40.9496 106.223 40.7884C105.769 40.6272 105.242 40.4791 104.64 40.3441C104.038 40.2091 103.399 40.0741 102.723 39.939C102.047 39.804 101.352 39.6581 100.637 39.5013C99.9217 39.3445 99.2263 39.1593 98.5504 38.9459C97.8745 38.7325 97.2357 38.4842 96.6339 38.2011C96.0322 37.918 95.5046 37.5826 95.0511 37.1949C94.5976 36.8072 94.24 36.3586 93.9784 35.849C93.7168 35.3393 93.5859 34.7491 93.5859 34.0783C93.5859 33.2856 93.7255 32.6017 94.0045 32.0268C94.2836 31.4518 94.6608 30.9618 95.1361 30.5567C95.6114 30.1516 96.1608 29.8228 96.7844 29.5701C97.4079 29.3175 98.0642 29.1215 98.7531 28.9821C99.4421 28.8427 100.14 28.7469 100.846 28.6946C101.553 28.6423 102.224 28.6162 102.861 28.6162C103.558 28.6162 104.276 28.6511 105.013 28.7207C105.75 28.7904 106.476 28.8884 107.191 29.0148C107.906 29.1411 108.597 29.287 109.264 29.4525C109.931 29.618 110.548 29.7923 111.115 29.9752V34.1306ZM134.4 47.028V39.5405H122.051V47.028H117.198V29.0736H122.051V35.6072H134.4V29.0736H139.254V47.028H134.4ZM168.138 38.0639C168.138 39.6058 167.854 40.967 167.287 42.1474C166.72 43.3278 165.909 44.3144 164.854 45.1071C163.799 45.8999 162.519 46.4988 161.015 46.9039C159.51 47.309 157.821 47.5115 155.946 47.5115C154.071 47.5115 152.376 47.309 150.863 46.9039C149.35 46.4988 148.062 45.8999 146.998 45.1071C145.934 44.3144 145.114 43.3278 144.538 42.1474C143.963 40.967 143.675 39.6058 143.675 38.0639C143.675 36.5219 143.963 35.1608 144.538 33.9803C145.114 32.7999 145.934 31.8133 146.998 31.0206C148.062 30.2278 149.35 29.6289 150.863 29.2238C152.376 28.8188 154.071 28.6162 155.946 28.6162C157.821 28.6162 159.51 28.8188 161.015 29.2238C162.519 29.6289 163.799 30.2278 164.854 31.0206C165.909 31.8133 166.72 32.7999 167.287 33.9803C167.854 35.1608 168.138 36.5219 168.138 38.0639ZM163.232 38.0639C163.232 37.3931 163.125 36.7245 162.911 36.058C162.698 35.3916 162.318 34.7927 161.773 34.2613C161.228 33.7299 160.485 33.2987 159.543 32.9676C158.601 32.6366 157.402 32.4711 155.946 32.4711C154.969 32.4711 154.11 32.5473 153.368 32.6997C152.627 32.8522 151.986 33.0634 151.446 33.3335C150.905 33.6036 150.451 33.9194 150.085 34.2809C149.719 34.6424 149.427 35.0301 149.209 35.4439C148.991 35.8577 148.836 36.2889 148.744 36.7375C148.653 37.1862 148.607 37.6283 148.607 38.0639C148.607 38.5082 148.653 38.9568 148.744 39.4098C148.836 39.8628 148.991 40.2962 149.209 40.71C149.427 41.1238 149.719 41.5093 150.085 41.8665C150.451 42.2236 150.905 42.5351 151.446 42.8008C151.986 43.0665 152.627 43.2755 153.368 43.428C154.11 43.5805 154.969 43.6567 155.946 43.6567C157.402 43.6567 158.601 43.4912 159.543 43.1601C160.485 42.8291 161.228 42.3979 161.773 41.8665C162.318 41.3351 162.698 40.7361 162.911 40.0697C163.125 39.4033 163.232 38.7347 163.232 38.0639ZM189.683 47.028V36.9662C189.683 36.2954 189.626 35.6878 189.513 35.1433C189.399 34.5989 189.188 34.1328 188.878 33.7451C188.569 33.3575 188.137 33.0569 187.583 32.8435C187.029 32.63 186.316 32.5233 185.444 32.5233C184.782 32.5233 184.086 32.6126 183.358 32.7912C182.63 32.9698 181.908 33.2072 181.193 33.5034C180.478 33.7996 179.795 34.1437 179.146 34.5357C178.496 34.9277 177.918 35.3372 177.412 35.764V47.028H172.559V29.0736H177.412V31.5302C178.023 31.1818 178.673 30.8355 179.361 30.4914C180.05 30.1473 180.783 29.8358 181.559 29.5571C182.335 29.2783 183.159 29.0518 184.032 28.8776C184.904 28.7033 185.824 28.6162 186.792 28.6162C188.004 28.6162 189.088 28.7621 190.043 29.054C190.997 29.3458 191.806 29.7596 192.469 30.2954C193.132 30.8311 193.64 31.4801 193.993 32.2424C194.346 33.0047 194.523 33.8562 194.523 34.797V47.028H189.683ZM200.07 47.028V29.0736H204.923V47.028H200.07ZM220.621 32.9807V47.028H215.767V32.9807H208.141V29.0736H228.26V32.9807H220.621Z" fill="#DE1A1B" />
                                    </svg> */}
                    <img
                      src="assets/img/shrava_01.png"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <p className="mt-2 mb-4 fw_3">
                    <h2>
                      Shrava is an AI application that analyses urine morphology
                      to identify <br /> and pre-classify sediments in urine
                      sample
                    </h2>
                  </p>
                  <button
                    className="d-block mx-auto px-4 "
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(true);
                    }}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-md-12 mx-auto slider-pc-bg">
              <div className="Shonit-slider ">
                <Slider {...shrava_settings}>
                  <div className="item">
                    <img src="assets/img/Shrava/shrava1.png" alt="" />
                  </div>
                  <div className="item">
                    <img src="assets/img/Shrava/shrava2.png" alt="" />
                  </div>
                  <div className="item">
                    <img src="assets/img/Shrava/shrava3.png" alt="" />
                  </div>
                </Slider>
              </div>
              <img
                src="assets/img/Shrava/pc.png"
                className="img-fluid pc-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="accurate-area pt-150 pb-50 mx-auto">
        <div className="container ">
          <div className="row">
            <div className="col-xxl-11 col-12 mx-auto mt-3 position-relative">
              <p className="fs_22 fw_3  text-center">
                AI100 with <span className="text-color fw_6">Shrava</span> gives
                out an accurate report on the presence of
              </p>

              <div className="accurate-grid Shrava-grid grid-4 mt-70 ">
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/RBCs.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">RBC's</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Casts.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Casts</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Crystals.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Crystals</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Yeast.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Yeast</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Epithelial_cells.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Epithelial cells</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Pus_cells.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Pus cells</h2>
                  </div>
                </div>
                <div className="accurate-list text-gray">
                  <div className="accurate-list-img text-center">
                    <img
                      src="assets/img/Shrava/icons/Microscopic_organisms.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-gray mt-3 text-center">
                    <h2 className="fw_6">Microscopic organisms</h2>
                  </div>
                </div>
              </div>

              <div className="text-center mt-150 mb-50">
                <h2 className="text-title text-color fw_7 ls_5 text-uppercase fs_20">
                  Features
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="analysis-area mx-auto">
        <div className="container ptb-80">
          <div className="analysis-slider">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="analysis-text">
                    <h1 className="text-gray fw_2 fs_46">
                      <span className="fw_6">AI-assisted </span> analysis
                    </h1>
                    <p className="text-gray m-0 mt-3 lss_5">
                      Automated identification and classification of urine
                      sediments with visual evidence
                    </p>
                  </div>
                </div>
                <div className="col-md-8 text-center">
                  <div className="analysis-img">
                    <img
                      src="assets/img/Shrava/gif/slider_01.gif"
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
      <div className="analysis-area mx-auto">
        <div className="container ptb-80">
          <div className="analysis-slider">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="Microscopic-text">
                    <h1 className="text-gray fw_2 fs_46">
                      <span className="fw_6">Microscopic </span> view
                    </h1>
                    <p className="text-gray m-0 mt-3 lss_5">
                      The Microscopic view enables the pathologist to virtually
                      “see” the slide as if it were under a microscope{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-8 text-center">
                  <div className="analysis-img">
                    <img
                      src="assets/img/Shrava/gif/slider_02.gif"
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

      {/* <div className="steps-area mx-auto">
            <div className="container ptb-80">
                <div className="row align-items-center steps-vh vh-100">
                    <div className="col-md-12 ">
                        <div className="steps-grid grid-3">
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white"> 
                                    <h1 className="fw_2 mt-2">Simplified Sample <br /><span className="fw_6">Preparation </span></h1>
                                    <p className="fw_2 lss_3">A single-use, leak proof, drift arresting Urine cartridge, AX200μ, simplifies the urine sample preparation.</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white"> 
                                    <h1 className="fw_2 mt-2">High <br /><span className="fw_6">Throughput </span></h1>
                                    <p className="fw_2 lss_3">The device can scan 12 slides per hour, where it takes 25 FOV (Fields of view)</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <h1 className="fw_2 mt-2">Sample Preparation <br /><span className="fw_6">Quality Check </span></h1>
                                    <p className="fw_2 lss_3">The system provides feedback on the quality of slides for each sample analysed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  */}

      <div className="scroll-animation-area mx-auto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="paddedCell">
                <div className="holdMeShrava2">
                  <div className="resizeMe2 steps-grid">
                    <div className="steps-list">
                      <div className="steps-text mt-4 text-white">
                        <h2 className="fw_3">
                          Simplified Sample <strong>Preparation </strong>
                        </h2>
                        <p>
                          A single-use, leak proof, drift arresting Urine
                          cartridge, AX200μ, simplifies the urine sample
                          preparation.
                        </p>
                      </div>
                    </div>
                    <div className="steps-list">
                      <div className="steps-text mt-4 text-white">
                        <h2 className="fw_3">
                          High <br />
                          <strong>Throughput </strong>
                        </h2>
                        <p>
                          The device can scan 12 slides per hour, where it takes
                          25 FOV (Fields of view)
                        </p>
                      </div>
                    </div>
                    <div className="steps-list">
                      <div className="steps-text mt-4 text-white">
                        <h2 className="fw_3">
                          Sample Preparation <br />
                          <strong>Quality Check </strong>
                        </h2>
                        <p>
                          The system provides feedback on the quality of slides
                          for each sample analysed.
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

      <div className="work-area video-section" style={{ marginTop: "100vh" }}>
        <div className="container px-0 position-relative ">
          <video
            id="media-video"
            poster="assets/img/Shonit/slider/shonit_video_bg.png"
            src={video && video.video ? video.video[0].url : null}
            type="video/mp4"
            ref={videoRef}
            controlsList="nodownload"
            onEnded={(e) => {
              setShow(true);
              videoRef.current.removeAttribute("controls");
            }}
          />
          {/* <source src="assets/video/video.mp4" type="video/mp4" /> */}
          {/* </video> */}
          <div className="video-text text-center">
            <img
              src="assets/img/shrava_01.png"
              className="img-fluid"
              alt=""
            ></img>
          </div>
          <div
            id="play-pause-button"
            className={`${show ? `play-btn` : ""}`}
            onClick={(e) => {
              if (show) {
                setShow(false);
                videoRef.current.setAttribute("controls", "controls");
                videoRef.current.play();
              } else {
                setShow(true);
                videoRef.current.removeAttribute("controls");
                videoRef.current.load();
              }
            }}
          >
            {
              show ? <i className="fa fa-play" aria-hidden="true"></i> : null
              // <i className="fa fa-pause" aria-hidden="true" style={{ marginLeft: "15px" }}></i>
            }
          </div>
        </div>
      </div>

      <Benefits />

      <Client />

      <ImageFooter />
    </>
  );
};
export default ShravaPage;
