import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <div>
            <footer className="footer-area py-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="foter-logo">
                                <a className="navbar-brand m-0 p-0">
                                    <img src="assets/img/logo.png" alt="" />
                                </a>
                                <p className="text-description mb-0 mt-4">SigTuple builds intelligent screening solutions to aid diagnosis through AI-powered analysis of visual medical data.</p>
                            </div>
                            <div className="d-flex my-4 footer-three-menu">
                                <Link to="/products" className="text-decoration-none text-danger fw-bold text-fwb">AI100</Link>
                                <Link to="/shonit" className="text-decoration-none text-danger fw-bold text-fwb mx-5">Shonit</Link>
                                <Link to="/shrava" className="text-decoration-none text-danger fw-bold text-fwb">Shrava</Link>
                            </div>
                            <div className="Copyright-area">
                                <p className="text-description mb-0">Copyright © 2015-2021</p>
                                <p className="text-description mb-0">SigTuple Technologies Private Limited.</p>
                                <p className="text-description mb-0 terms-condition">All Rights Reserved. | <Link to="/terms"><b>Terms &amp; Conditions</b></Link></p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex footer-menu">
                            <div className="flex-column d-flex justify-content-between h-100 mx-auto">
                                 <Link to="/aboutus" className="text-decoration-none text-danger fw-bold text-fwb">About Us</Link>
                                 <Link to="/products" className="text-decoration-none text-danger fw-bold text-fwb">Products</Link>
                                 <Link to="/research" className="text-decoration-none text-danger fw-bold text-fwb">Research</Link>
                                 <Link to="/blogs" className="text-decoration-none text-danger fw-bold text-fwb">Blogs &amp; News</Link>
                                 <Link to="/careers" className="text-decoration-none text-danger fw-bold text-fwb">Career</Link>
                                 <Link to="/contactus" className="text-decoration-none text-danger fw-bold text-fwb">Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-md-4 footer-address-area">
                            <div className="footer-address">
                                <p className="text-description mb-0 fw-bold">SigTuple Technologies Pvt. Ltd.</p>
                                <p className="text-description mb-0">First Floor, L-162, 14th Cross Rd, Sector 6, HSR Layout, Karnataka, 560102, India</p>
                                <p className="text-description mb-0 mt-4">Mon-Sat: 9 AM – 6 PM</p>
                                <p className="text-description mb-4">Sun: Closed</p>
                            </div>
                            <div className="social-media">
                                <ul className="mt-3 mb-3">
                                    <li>
                                       <Link to={{pathname:"https://www.facebook.com/SigTuple"}} target="_blank"><img src="assets/img/icons/fb.svg" className="img-fluid" width="25" /></Link>
                                       <Link to={{pathname:"https://www.youtube.com/channel/UCi1ZEDwZEBKCiXtMalsQxRQ"}}  className="mlr-20" target="_blank"><img src="assets/img/icons/youtube.svg" className="img-fluid" width="25" /></Link>
                                       <Link to={{pathname:"https://www.linkedin.com/company/SigTuple/"}} target="_blank"><img src="assets/img/icons/in.svg" className="img-fluid" width="25" /></Link>
                                    </li>
                                </ul>                        
                            </div>
                        </div>
                    </div>
                            </div>
                    </footer>
                    </div>
                    )
}

                    export default Footer;