const Benefits = (props) => {
  return (
    <div className="Benefits-area">
      <div className="container ptb-80">
        <div className="row">
          <div className="col">
            <div className="text-center optiontitle">
              <h2 className="text-title text-color fw_7 fs_20">Benefits</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto mt-50 position-relative">
            <div className="Benefits-grid grid-4">
              <div className="Benefits-list">
                <div className="Benefits-icon">
                  <img
                    src="assets/img/benefits/faster_tat.png"
                    className="img-fluid"
                    alt=""
                    width="45"
                  />
                </div>
                <div className="Benefits-title mt-10">
                  <h6 className="">
                    Faster <br /> TAT
                  </h6>
                </div>
                <div className="Benefits-text">
                  <p className="m-0">
                    through remote review and reduced review time
                  </p>
                </div>
              </div>
              <div className="Benefits-list">
                <div className="Benefits-icon">
                  <img
                    src="assets/img/benefits/Remote_Collaboration.png"
                    className="img-fluid"
                    alt=""
                    width="45"
                  />
                </div>
                <div className="Benefits-title mt-10">
                  <h6 className="">
                    Remote <br /> Collaboration{" "}
                  </h6>
                </div>
                <div className="Benefits-text">
                  <p className="m-0">
                    Facilitates doctors to collaborate on special cases remotely
                  </p>
                </div>
              </div>
              <div className="Benefits-list">
                <div className="Benefits-icon">
                  <img
                    src="assets/img/benefits/Improve-Patient-Outcome.png"
                    className="img-fluid"
                    alt=""
                    width="45"
                  />
                </div>
                <div className="Benefits-title mt-10">
                  <h6 className="">
                    Improve <br /> Patient Outcome
                  </h6>
                </div>
                <div className="Benefits-text">
                  <p className="m-0">Highly sensitive in finding rarer cells</p>
                </div>
              </div>
              <div className="Benefits-list">
                <div className="Benefits-icon">
                  <img
                    src="assets/img/benefits/Reduce-eye-strain-and-fatigue.png"
                    className="img-fluid"
                    alt=""
                    width="45"
                  />
                </div>
                <div className="Benefits-title mt-10">
                  <h6 className="">
                    Reduce Eye <br /> Strain and Fatigue
                  </h6>
                </div>
                <div className="Benefits-text">
                  <p className="m-0">reduces slide review time by 5 times</p>
                </div>
              </div>

              <div className="Benefits-list">
                <div className="Benefits-icon">
                  <img
                    src="assets/img/benefits/Unlimited-cloud-storage.png"
                    className="img-fluid"
                    alt=""
                    width="45"
                  />
                </div>
                <div className="Benefits-title mt-10">
                  <h6 className="">
                    Unlimited <br /> Cloud Storage
                  </h6>
                </div>
                <div className="Benefits-text">
                  <p className="m-0">of digital patient reports</p>
                </div>
              </div>
              {props.term === "product" ? (
                <>
                  <div className="Benefits-list">
                    <div className="Benefits-icon">
                      <img
                        src="assets/img/benefits/Quality-Check.png"
                        className="img-fluid"
                        alt=""
                        width="45"
                      />
                    </div>
                    <div className="Benefits-title mt-10">
                      <h6 className="">
                        Quality <br /> Check{" "}
                      </h6>
                    </div>
                    <div className="Benefits-text">
                      <p className="m-0">
                        Ensures sample preparation quality through flags and
                        reports
                      </p>
                    </div>
                  </div>
                  <div className="Benefits-list">
                    <div className="Benefits-icon">
                      <img
                        src="assets/img/benefits/Predictive-Maintenance.png"
                        className="img-fluid"
                        alt=""
                        width="45"
                      />
                    </div>
                    <div className="Benefits-title mt-10">
                      <h6 className="">
                        Predictive <br /> Maintenance
                      </h6>
                    </div>
                    <div className="Benefits-text">
                      <p className="m-0">
                        Flags anomalies in the system to reduce breakdown
                      </p>
                    </div>
                  </div>
                  <div className="Benefits-list">
                    <div className="Benefits-icon">
                      <img
                        src="assets/img/benefits/Hassle-free-upgrades.png"
                        className="img-fluid"
                        alt=""
                        width="45"
                      />
                    </div>
                    <div className="Benefits-title mt-10">
                      <h6 className="">
                        Hassle-free <br /> Upgrades
                      </h6>
                    </div>
                    <div className="Benefits-text">
                      <p className="m-0">
                        Remote upgrades for better performance and new products.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="Benefits-list">
                    <div className="Benefits-icon">
                      <img
                        src="assets/img/benefits/Cloud-Based-Reports.png"
                        className="img-fluid"
                        alt=""
                        width="45"
                      />
                    </div>
                    <div className="Benefits-title mt-10">
                      <h6 className="">
                        Cloud-Based <br /> Reports
                      </h6>
                    </div>
                    <div className="Benefits-text">
                      <p className="m-0">
                        Get all the scanned images and results readily available
                        on a web-based platform called Mandara
                      </p>
                    </div>
                  </div>
                  <div className="Benefits-list">
                    <div className="Benefits-icon">
                      <img
                        src="assets/img/benefits/Tele-Reporting.png"
                        className="img-fluid"
                        alt=""
                        width="45"
                      />
                    </div>
                    <div className="Benefits-title mt-10">
                      <h6 className="">
                        Tele <br /> Reporting
                      </h6>
                    </div>
                    <div className="Benefits-text">
                      <p className="m-0">
                        Enables foolproof Tele Reporting from anywhere across
                        the world!
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
