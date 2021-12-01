// import React, { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const SectionCounter = () => {
  // const [show, setShow] = useState(false);
  // const [accuracy, setAccuracy] = useState(0);
  // const [innovation, setInnovation] = useState(0);
  // const [acceptance, setAcceptance] = useState(0);

  // useEffect(() => {
  //   if (show && accuracy < 20) {
  //     let id = setTimeout(() => {
  //       let counter = accuracy + 1;
  //       setAccuracy(counter);
  //     }, 10);
  //     return () => {
  //       clearTimeout(id);
  //     };
  //   }

  //   if(window.innerWidth < 900){
  //     setAccuracy(20)
  //   }

  // }, [show, accuracy]);

  // useEffect(() => {

  //   if (show && innovation < 15) {
  //     let id = setTimeout(() => {
  //       let counter = innovation + 1;
  //       setInnovation(counter);
  //     }, 10);
  //     return () => {
  //       clearTimeout(id);
  //     };
  //   }

  //   if(window.innerWidth < 900){
  //     setInnovation(15)
  //   }

  // }, [show, innovation]);

  // useEffect(() => {
  //   if (show && acceptance < 31 ) {
  //     let id = setTimeout(() => {
  //       let counter = acceptance + 1;
  //       setAcceptance(counter);
  //     }, 10);
  //     return () => {
  //       clearTimeout(id);
  //     };
  //   }
  //   if(window.innerWidth < 900){
  //     setAcceptance(31)
  //   }
  // }, [show, acceptance]);

  return (
    <div className="policy-area">
      <div className=" container">
        <div className="row">
          <div className="col-12 policy ">
            <div className="my-auto w-100">
              <div className="p-4 m-auto d-xxl-flex d-xl-flex d-lg-flex justify-content-between policy-list">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="policy-list-item">
                      <h5>ACCURACY</h5>
                      <div className="d-flex mt-2">
                        {isVisible ? <h1><CountUp end={20} duration={1} /></h1> : null}
                        <p className="text-description mt-auto ps-3 ml-3 fw_3">
                          Clinical Studies<br />
                          Performed</p>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="policy-list-item">
                      <h5>Innovation</h5>
                      <div className="d-flex mt-2">
                        {isVisible ? <h1><CountUp end={15} duration={1} /></h1> : null}
                        <p className="text-description mt-auto ps-3 ml-3 fw_3">
                          Patents granted in<br />
                          The United States of <br />
                          America and India
                        </p>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="policy-list-item">
                      <h5>ACCEPTANCE</h5>
                      <div className="d-flex mt-2">
                        {isVisible ? <h1><CountUp end={31} duration={1} /></h1> : null}
                        <p className="text-description mt-auto ps-3 ml-3 fw_3">
                          Publications in reputed <br />
                          Medical and Technical <br /> 
                          Journals</p>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
                {/* <div className="policy-list-item">
              <h5>Innovation</h5>
              <div className="d-flex mt-2">
                <h1>{innovation}</h1>
                <p className="text-description mt-auto ps-3 ml-3 fw_3">
                  Granted Patents in<br />
                  The US and India
                </p>
              </div>
            </div>
            <div className="policy-list-item item-last">
              <h5>Acceptance</h5>
              <div className="d-flex mt-2">
                <h1>{acceptance}</h1>
                <p className="text-description mt-auto ps-3 ml-3 fw_3">
                  Publications in Medical<br />
                  and Technical Journals
                </p>
              </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

    // <div
    //   className="policy container"
    //   onMouseOver={(e) => {
    //     setShow(true);
    //   }}
    //   // onMouseLeave={(e) => {
    //   //   setShow(false);
    //   //   setAccuracy(0);
    //   //   setInnovation(0);
    //   //   setAcceptance(0);
    //   // }}
    // >
    //   <div className="col-12 my-auto">
    //     <div className="p-4 m-auto d-flex flex-wrap justify-content-between">
    //       <div className="">
    //         <h5>ACCURACY</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{accuracy}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Clinical Studies
    //             <br />
    //             Performed
    //           </p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <h5>Innovation</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{innovation}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Granted Patents in
    //             <br />
    //             The US and India
    //           </p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <h5>Acceptance</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{acceptance}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Publications in Medical
    //             <br />
    //             and Technical Journals
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default SectionCounter;
