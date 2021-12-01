// import React, { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Counters = () => {
    // const [show, setShow] = useState(false);
    // const [partners, setPartners] = useState(0);
    // const [advisors, setAdvisors] = useState(0);
    // const [RND, setRND] = useState(0);

    // useEffect(() => {
    //     if (show && partners < 20) {
    //         let id = setTimeout(() => {
    //             let counter = partners + 1;
    //             setPartners(counter);
    //         }, 10);
    //         return () => {
    //             clearTimeout(id);
    //         };
    //     }
    //     if(window.innerWidth < 900){
    //         setPartners(20)
    //     }
    // }, [show, partners]);

    // useEffect(() => {
    //     if (show && advisors < 50) {
    //         let id = setTimeout(() => {
    //             let counter = advisors + 1;
    //             setAdvisors(counter);
    //         }, 10);
    //         return () => {
    //             clearTimeout(id);
    //         };
    //     }
    //     if(window.innerWidth < 900){
    //         setAdvisors(50)
    //     }
    // }, [show, advisors]);

    // useEffect(() => {
    //     if (show && RND < 6) {
    //         let id = setTimeout(() => {
    //             let counter = RND + 1;
    //             setRND(counter);
    //         }, 100);
    //         return () => {
    //             clearTimeout(id);
    //         };
    //     }
    //     if(window.innerWidth < 900){
    //         setRND(6)
    //     }
    // }, [show, RND]);

    return (
        // <div className="policy-area" onMouseOver={(e) => {
        //     setShow(true);
        // }}>
        <div className="policy-area about-policy-area">
            <div className=" container">
                <div className="row">
                    <div className="col-12 policy " style={{height: '50vh'}}>
                        <div className="my-auto w-100">
                            <div className="p-4 m-auto d-xxl-flex d-xl-flex d-lg-flex justify-content-between policy-list">
                                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="policy-list-item">
                                            <div className="d-flex mt-2">
                                                {isVisible ? <h1><CountUp end={20} duration={1} />+</h1> : null}
                                                <p className="text-description mt-auto ps-3 ml-3 fw_3">
                                                    Clinical Trial<br />
                                                    Partners</p>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>

                                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="policy-list-item">
                                            <div className="d-flex mt-2">
                                                {isVisible ? <h1><CountUp end={50} duration={1} />+</h1> : null}
                                                <p className="text-description mt-auto ps-3 ml-3 fw_3">
                                                    Expert<br />
                                                    Advisors</p>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>

                                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                    {({ isVisible }) => (
                                        <div className="policy-list-item">
                                            <div className="d-flex mt-2">
                                                {isVisible ? <h1><CountUp end={6} duration={1} />+</h1> : null}
                                                <p className="text-description mt-auto ps-3 ml-3 fw_3">
                                                    Years of<br />
                                                    R&D</p>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>

                                {/* <div className="policy-list-item">
                                    <div className="d-flex mt-2">
                                        <h1>{partners}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Clinical Trial<br />
                                            Partners
                                        </p>
                                    </div>
                                </div>
                                <div className="policy-list-item">
                                    <div className="d-flex mt-2">
                                        <h1>{advisors}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Expert<br />
                                            Advisors
                                        </p>
                                    </div>
                                </div>
                                <div className="policy-list-item item-last">
                                    <div className="d-flex mt-2">
                                        <h1>{RND}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Years of<br />
                                            R&D
                                        </p>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Counters;
