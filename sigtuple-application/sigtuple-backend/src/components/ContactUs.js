import { useEffect, useState } from "react";
// import { GeneralFAQ,ShonitFAQ,ShravaFAQ } from "../contents_json/FAQ";
import Form from "./ContactUs/Form";
import ThankPage from "./ContactUs/ThankPage";
import { getFAQs, getFAQCounts } from "../Api";
import _ from 'lodash';
import { Helmet } from "react-helmet";

const ContactUs = () => {
    const [tab, setTab] = useState("general")
    const [FAQ, setFAQ] = useState(1)
    const [FAQList, setFAQList] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [isOpen,setIsOpen]=useState(false)

    useEffect(() => {
        const getFAQ = async () => {
            let data = await getFAQs({ type: tab, limit: 5 })
            let count = await getFAQCounts({ type: tab })
            if (count <= 5) setHasMore(false)
            else setHasMore(true)
            setFAQList(data)
        }
        getFAQ()

        // if(tab==='General') setFAQList(GeneralFAQ)
        // if(tab==='Shonit') setFAQList(ShonitFAQ)
        // if(tab==='Shrava') setFAQList(ShravaFAQ)
    }, [tab])

    const getFAQDetails = () => {
        const getFAQ = async () => {
            let data = await getFAQs({ start: FAQList.length, limit: 5,type:tab })
            let FAQS = FAQList.concat(data)
            setFAQList(FAQS)
            let count = await getFAQCounts({ type: tab })
            if (count <= FAQS.length) setHasMore(false)
            else setHasMore(true)
        }
        getFAQ()
    }

    const getFAQInitial = () =>{
        const getFAQ = async () => {
            let data = await getFAQs({ type: tab, limit: 5 })
            let count = await getFAQCounts({ type: tab })
            if (count <= 5) setHasMore(false)
            else setHasMore(true)
            setFAQList(data)
        }
        getFAQ()
    }

    const toggelFAQ = (id) => {
        if (FAQ === id) {
            setFAQ(null)
        }
        else {
            setFAQ(id)
        }

    }


    let renderFAQList = FAQList.map(f => {
        return (
            <div className="specs-card" key={f.id} onClick={(e => {
                e.preventDefault()
                toggelFAQ(f.id)
            })}>
                <div className="specs-heading">
                    <a className={`${FAQ !== f.id ? `collapsed` : ''}fs_18 fw_6`}>
                        {f.title}
                        {FAQ === f.id ? <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 11L11.4711 1.20088C11.3462 1.07227 11.1767 1 11 1C10.8233 1 10.6538 1.07227 10.5289 1.20088L1 11" stroke="#DE1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> : <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1L10.5289 10.7991C10.6538 10.9277 10.8233 11 11 11C11.1767 11 11.3462 10.9277 11.4711 10.7991L21 0.999999" stroke="#DE1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>}
                    </a>
                </div>
                <div className={`specs-details ${FAQ !== f.id ? `collapse` : ''}`}>
                    <div className="specs-body">
                        <p className="text-gray fs_18">
                            {f.description}
                        </p>
                    </div>
                </div>
            </div>

        )
    })

    return (
        <>
           <Helmet>
                <title>SigTuple - Contact US </title>
            </Helmet>

            <Form setIsOpen={setIsOpen}/>
            <ThankPage isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="faqs-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center optiontitle">
                            <h2 className="text-title text-color fw_7 ls_5 fs_20">FAQ <span style={{ textTransform: "lowercase", paddingTop: "2px", position: "absolute" }}>s</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row faqs-margin m-70">
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className="faq-left">
                                <ul className="m-0">
                                    <li>
                                        <h5 className="text-color">SigTuple AI100</h5>
                                    </li>
                                    <li className={`${tab === 'general' ? `active` : ''}`} onClick={(e => {
                                        setTab("general")
                                        setFAQ(1)
                                    })}>
                                        <span>General</span>
                                    </li>
                                    <li className={`${tab === 'shonit' ? `active` : ''}`} onClick={(e => {
                                        setTab("shonit")
                                        setFAQ(1)
                                    })}>
                                        <span>Shonit</span>
                                    </li>
                                    <li className={`${tab === 'shrava' ? `active` : ''}`} onClick={(e => {
                                        setTab("shrava")
                                        setFAQ(1)
                                    })}>
                                        <span>Shrava</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-12 ">
                            <div className="faqs-right position-relative">
                                <h3 className="text-gray fw_6">{_.upperFirst(tab)} FAQs</h3>
                                <div className="">
                                    {renderFAQList}
                                </div>
                                {hasMore ? <div className="mt-30 mb-30 mx-auto text-center" onClick={(e=>{
                                    e.preventDefault()
                                    getFAQDetails()
                                })}>
                                    <span  className="text-color fw_6 mx-auto ">
                                        <span>View All</span>
                                        <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px" }}>
                                            <path d="M0.999999 1L10.5289 10.7991C10.6538 10.9277 10.8233 11 11 11C11.1767 11 11.3462 10.9277 11.4711 10.7991L21 0.999999" stroke="#DE1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div> : <div className="mt-30 mb-30 mx-auto text-center" onClick={(e=>{
                                    e.preventDefault()
                                    getFAQInitial()
                                })}>
                                    <span  className="text-color fw_6 mx-auto ">
                                        <span>View Less</span>
                                        <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px" }}>
                                            <path d="M21 11L11.4711 1.20088C11.3462 1.07227 11.1767 1 11 1C10.8233 1 10.6538 1.07227 10.5289 1.20088L1 11" stroke="#DE1A1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Reachus-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center optiontitle">
                                <h2 className="text-title text-color fw_7 ls_5 text-uppercase fs_20">Reach Us  At</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-80">
                        <div className="col-lg-8 col-md-12 col-12 mx-auto">
                            <div className="Reachus-grid grid-2">
                                <div className="Reachus-list">
                                    <div className="d-flex ">
                                        <div className="">
                                            <svg width="25" height="25" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.9628 31.0044L18.5 43.4673L6.03718 31.0044C3.5723 28.5395 1.8937 25.399 1.21365 21.9801C0.533605 18.5612 0.882651 15.0174 2.21665 11.7969C3.55065 8.57637 5.80969 5.82373 8.70811 3.88708C11.6065 1.95043 15.0141 0.916748 18.5 0.916748C21.9859 0.916748 25.3935 1.95043 28.2919 3.88708C31.1903 5.82373 33.4494 8.57637 34.7834 11.7969C36.1174 15.0174 36.4664 18.5612 35.7864 21.9801C35.1063 25.399 33.4277 28.5395 30.9628 31.0044ZM18.5 22.4583C19.5388 22.4583 20.535 22.0456 21.2695 21.3111C22.004 20.5766 22.4167 19.5804 22.4167 18.5416C22.4167 17.5028 22.004 16.5066 21.2695 15.7721C20.535 15.0376 19.5388 14.6249 18.5 14.6249C17.4612 14.6249 16.465 15.0376 15.7305 15.7721C14.996 16.5066 14.5833 17.5028 14.5833 18.5416C14.5833 19.5804 14.996 20.5766 15.7305 21.3111C16.465 22.0456 17.4612 22.4583 18.5 22.4583Z" fill="#DE1A1B" />
                                            </svg>

                                        </div>
                                        <div className=" ml-3">
                                            <h5 className="fw_6 text-gray mb-1">SigTuple Technologies Pvt. Ltd. </h5>
                                            <p className="fs_18 fw_3 text-gray">First Floor, L-162, 14th Cross Rd, Sector 6, HSR Layout, Karnataka, 560102, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Reachus-list">
                                    <div className="d-flex ">
                                        <div className="">
                                            <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.39256 11.4225L19.5013 0.565458C19.8056 0.382842 20.1539 0.286377 20.5088 0.286377C20.8638 0.286377 21.212 0.382842 21.5164 0.565458L39.6075 11.4244C39.7526 11.5114 39.8728 11.6345 39.9562 11.7817C40.0396 11.929 40.0834 12.0953 40.0834 12.2645V37.1667C40.0834 37.6861 39.877 38.1842 39.5098 38.5515C39.1425 38.9187 38.6444 39.125 38.125 39.125H2.87502C2.35564 39.125 1.85753 38.9187 1.49027 38.5515C1.12301 38.1842 0.916687 37.6861 0.916687 37.1667V12.2626C0.916652 12.0934 0.960471 11.927 1.04387 11.7798C1.12727 11.6325 1.24741 11.5094 1.39256 11.4225ZM32.9276 14.1445L20.6195 24.7959L8.05873 14.1328L5.52465 17.1173L20.643 29.9542L35.4891 17.1075L32.9276 14.1445Z" fill="#DE1A1B" />
                                            </svg>
                                        </div>
                                        <div className=" ml-3">
                                            <a href="mailto:info@SigTuple.com" className="text-gray fs_20 fw_6">info@SigTuple.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.493402608608!2d77.6304527!3d12.9158606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f89e6e93086869c!2sSigTuple!5e0!3m2!1sen!2sus!4v1628170425583!5m2!1sen!2sus" style={{ width: "100%", height: "826px", allowfullscreen: "", loading: "lazy"}} />
            {/* <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119035.62429450588!2d72.82360306621916!3d21.197590335830096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smap!5e0!3m2!1sen!2sin!4v1627391173274!5m2!1sen!2sin" width="100%" height="826px" allowfullscreen="" loading="lazy"></iframe> */}
        </>
    )
}

export default ContactUs;