

import { useEffect,useState } from "react"
import { getTermsNConditions } from "../Api"
import moment from "moment"
import { Helmet } from "react-helmet"
const TermsConditions = () =>{
    const [terms,setTerms]=useState([])

    useEffect(()=>{
        const getTerms = async() =>{
            let data=await getTermsNConditions()
            setTerms(data)
        }
        getTerms()
    },[])


    let renderTerms=terms.map(t=>{
        if(t.title==='Terms and Conditions for Website Usage'){
            return(
                <div class="mb-4" key={t.id}>
                <h4 class="fw_7 text-gray">{t.title}</h4>
                <p class="text-gray">Last updated: {moment(t.updated_at).format("DD MMM YYYY")}</p>

                {t.description.map((v,k)=>{
                    return(<p class="text-gray pb-3" key={k}>{v.Line}</p>)
                })}
            </div>
            )
        }
        else{
            return (
                <div class="mb-4" key={t.id}>
                <h4 class="fw_7 text-gray">{t.title}</h4>
                {t.description.map((v,k)=>{
                    return(<p class="text-gray pb-3" key={k}>{v.Line}</p>)
                })}
            </div>
            )
        }
     
    })


    return(
        <>
        <Helmet>
            <title>SigTuple-Terms & Conditions</title>
        </Helmet>
        <div class="TermsConditions-area pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center blog-titles">  
                        <h1 class="mt-4">                                     
                            <span class="fw_6 text-gray">Terms & Conditions</span>  
                        </h1> 
                    </div>                            
                </div>
            </div>
             <div class="row">
                <div class="col-md-11 col-12 mx-auto mt-4">
                    <div class="TermsConditions-list">
                        {renderTerms}
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default TermsConditions