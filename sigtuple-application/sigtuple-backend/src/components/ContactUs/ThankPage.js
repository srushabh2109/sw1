

const ThankPage = ({isOpen,setIsOpen}) =>{
    return (
        <div className="modal fade show" style={{display:`${isOpen ? `block`:'none'}` , backgroundColor:"rgba(0, 0, 0, 0.47)"}}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <span className="close-popup" onClick={(e=>{
                    setIsOpen(false)
                })}>
                    <img src="assets/img/close.png" className="img-fluid" alt="" />
                </span>
                <div className="thankyou-contact">
                     <div className="">
                        <span>                                
                            <svg width="52" height="52" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.7312 22.0015V1.99614C43.7312 0.895326 42.7523 0 41.5486 0H2.18255C0.978937 0 0 0.895326 0 1.99614V33.993C0 35.0939 0.978937 35.9892 2.18255 35.9892H26.2387V31.9969H4.38114V8.42487L22.0341 22.662L39.3661 8.46891V21.9869H43.7312V22.0015ZM22.002 17.3194L5.48847 4.00695H38.2748L22.002 17.3194Z" fill="#707070"/>
                                <path d="M37.1673 32.3343L32.5294 28.0925L29.4321 30.9252L37.1673 37.9998L47.9998 28.0925L44.9025 25.2744L37.1673 32.3343Z" fill="#DE1A1B"/>
                            </svg>
                        </span>
                        <h1 className="fw_3 text-gray mt-2 mb-80">Thank <span className="fw_6">You</span></h1>
                        <p className="fs_18 text-gray">Thank you for reaching out to us, we will contact you shortly</p>
                     </div>
                </div>                     
            </div>
        </div>
    </div>
    )
}
export default ThankPage;