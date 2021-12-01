import React, { useEffect, useRef, useState } from "react";
import { getVideos } from "../../Api";
// import shravaVideo from "../../assests/videos/shrava v6.mp4";

const Shrava = ({ tab }) => {
  // const [show, setShow] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

  const [video, setVideo] = useState({});
  const ref = useRef();

  useEffect(() => {
    const getVideo = async () => {
      let data = await getVideos({ type: "Shrava" });
      setVideo(data);
    };
    getVideo();
  }, []);

  useEffect(() => {}, [tab]);

  return (
    <div
      className="tab-pane fade show active position-relative"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="work-area video-section">
        <div className="container px-0 position-relative ">
          <video
            id="media-video"
            poster="assets/img/Shonit/slider/shonit_video_bg.png"
            src={""}
            type="video/mp4"
            ref={ref}
            controlsList="nodownload"
            onEnded={(e) => {
              setShowVideo(true);
              ref.current.removeAttribute("controls");
            }}
          />
          <div className="video-text text-center">
            <img
              src="assets/img/shrava_01.png"
              className="img-fluid"
              alt=""
            ></img>
          </div>
          <div
            id="play-pause-button"
            className={`${showVideo ? `play-btn` : ""}`}
            onClick={(e) => {
              if (showVideo) {
                setShowVideo(false);
                ref.current.setAttribute("controls", "controls");
                ref.current.play();
              } else {
                setShowVideo(true);
                ref.current.removeAttribute("controls");
                ref.current.load();
              }
            }}
          >
            {
              showVideo ? (
                <i className="fa fa-play" aria-hidden="true"></i>
              ) : null
              //  <i className="fa fa-pause" aria-hidden="true" style={{ marginLeft: "15px" }}></i>
            }
          </div>
        </div>
      </div>

      {/* <video src={video && video.video ? video.video[0].url : null} type="video/mp4" muted className="img-fluid tab-video work-box1" ref={ref} onEnded={(e => {
        setShow(true)
      })} />
      <div className="play-btn1" onClick={(e => {
        console.log(ref)
        if (show) {
          setShow(false)
          ref.current.play()
        }
        else {
          setShow(true)
          ref.current.pause()
        }
      })}>
        {
          show ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>
        } </div> */}
      {/* <div className="work-box1" onClick={(e=>{
        setShowVideo(true)
      })}>
      {showVideo ?
      <>
       <video src={video && video.video ? video.video[0].url :null} type="video/mp4" autoPlay muted className="img-fluid tab-video" ref={ref}  controls controlsList="nodownload" onEnded={(e => {
        setShowVideo(false)
      })}/>
      </>
      :
      <> */}
      {/* <div className="text_section_blood">Shrava <strong>in Action</strong></div>       */}
      {/* <div className="blood image_section_blood">
          <img src="assets/img/urine.png" />
          <div className="play-btn1">
              <i className="bi bi-play-fill"></i>
              </div>
        </div>
        </>}
    </div> */}
    </div>
  );
};

export default Shrava;
