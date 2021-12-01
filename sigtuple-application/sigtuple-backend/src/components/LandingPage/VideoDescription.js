import React, { useEffect, useRef, useState } from 'react';
import { getVideos } from "../../Api";

const VideoDescription = () => {
    const [show, setShow] = useState(true)
    const [video, setVideo] = useState({})
    const ref = useRef()

    useEffect(() => {
        const getVideo = async () => {
            let data = await getVideos({ type: "Presentation" })
            setVideo(data)

        }
        getVideo()
    }, [])


    return (
        <div className="homevideo-area">
            <div className="container-fluid px-0 position-relative">
                <video id="media-video-home" poster="assets/img/video_section.png" src={video && video.video ? video.video[0].url : null} type="video/mp4" muted ref={ref} controlsList="nodownload" onEnded={(e => {
                    setShow(true)
                })} />
                {/* <source src="assets/video/video.mp4" type="video/mp4" /> */}
                {/* </video> */}
                <div className="video-text container">
                    <h1 className="fw_2">SigTuple Combined Robotics &amp;  </h1>
                    <h1 className="fw_6">Artificial Intelligence</h1>

                    <p className="textdescription">
                        to build a smart screening solution. Healthcare <br />
                        made accessible, accurate, and affordable.
                    </p>
                </div>
                <div id="play-pause-button" className="play-btn" onClick={(e => {
                    if (show) {
                        setShow(false)
                        ref.current.play()
                    }
                    else {
                        setShow(true)
                        ref.current.load()
                    }
                })}>

                    {show ? <i className="fa fa-play" aria-hidden="true"></i> : <i className="fa fa-pause" aria-hidden="true" style={{ marginLeft: "15px" }}></i>}
                </div>
            </div>
        </div>

        //      <div className="container-fluid px-0 position-relative video-section">
        //     <video muted id="media-video" poster="assets/img/video_section.png" ref={ref}>
        //         <source src="assets/video/video.mp4" type="video/mp4"/>
        //     </video>
        //     <div className="video-text container">
        //         <h1>
        //             SigTuple Combined Robotics &
        //             <br/>
        //             <b>
        //                 Artificial Intelligence
        //             </b>
        //         </h1>
        //         <p className="textdescription">
        //             to build a smart screening solution.
        //             <br/>
        //             Healthcare made accessible, accurate, and affordable.
        //         </p>
        //     </div>
        //     <div id="play-pause-button" className="play-btn" onClick={(e=>{
        //         if(show){
        //             setShow(false)
        //             ref.current.play()
        //         }
        //         else{
        //             setShow(true)
        //             ref.current.load()
        //         }
        //     })}>
        //         {show ? <i className="bi bi-play-fill"></i> :  <i className="bi bi-pause-fill"></i> }
        //     </div>
        // </div>
    )
}

export default VideoDescription;