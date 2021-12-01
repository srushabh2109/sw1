import { useState } from "react";
import BookDemo from "./BookDemo";


const ImageFooter = () =>{
    const [isOpen, setIsOpen] = useState(false)

    return(
    <>
    <BookDemo isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className="yourself-area simple d-flex">
        <div className="container my-auto">
            <div className="row">
                <div className="col">
                    {/* <div className="pagetitles">
                        <div id="zooms" className="text zoom ">
                            <div className="small"> 
                                <h1>Simple. Quick. Accurate.<br /><b>See it for yourself.</b></h1>
                            </div>
                            <div className="large"></div>
                        </div> 
                    </div> */}
                    <h1 className="fw_2">Simple. Quick. Accurate.<br /> <span className="fw_6">See it for yourself.</span></h1>
                    
                    <p className="my-3">
                        Let us show you how our device helps<br />
                        you transform your workflow
                    </p>
                    <button className="mt-3 px-4 shadow-none" onClick={(e=>{
                        e.preventDefault()
                        setIsOpen(true)
                    })}>Book a Demo</button>                            
                </div>
            </div>

        </div>
    </div> 
    </>
    )
}

export default ImageFooter;