import React, { useEffect, useState } from 'react';
import {getBlogs,getBlogCounts} from '../Api';
import moment from 'moment';
import '../css/responsive.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const BlogLists = () =>{
    const [blogList,setBlogList]=useState([])
    const [hasMore,setHasMore]=useState(false)
    
    useEffect(()=>{
        const getBlog = async () =>{
          let data = await getBlogs({limit:10});
          if(data.length==10){
              let count=await getBlogCounts()
              if(count<=10) setHasMore(false)
              else setHasMore(true)

          } 
          setBlogList(data)
        }
        getBlog()
      },[])

   const getBlogDetails = () =>{
    const getBlog = async () =>{
        let data=await getBlogs({start:`${blogList.length}`,limit:10})
        let blogs = blogList.concat(data) 
        setBlogList(blogs)
        let count=await getBlogCounts()
        if(count<=blogs.length) setHasMore(false)
        else setHasMore(true)
    }
    getBlog()
   }   

     const renderItems=blogList.map(b=>{
         return (
            <div className="lab-card position-relative" key={b.id}>
            <img src={`${b.cover_image && b.cover_image.length ? b.cover_image[0].url : `assets/img/lab-1.png`}`} className="img-fluid" style={{width:"320px",height:"418px",objectFit:"cover"}}/>
            <div className="lab-text">
                <span>{b.duration} min read</span>
                <h3 className="text-sub mb-1 fw_6" style={{ display: "-webkit-box",WebkitLineClamp: "2",WebkitBoxOrient: "vertical",overflow: "hidden"}}>{b.title}</h3>
                <div className="description-blog-hide">
                    <span className="text-70 fw_4 d-block">{`${b.description.slice(0,100)}...`}</span>
                    <span className="text-70 fw_4 d-block mt-2 mb-3">{moment(b.publish_at).format("MMM DD,YYYY")}</span>

                    <Link to={{pathname:`${b.url}`}} className="text-decoration-none text-danger fw-bold text-fwb" target="_blank">Read More
                        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "5px"}}>
                            <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div> 
        
         )
     }) 


   
      return(
          <>
        <Helmet>
            <title>SigTuple-Blogs & News</title>
        </Helmet>
        <div className="Blog-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <div className="text-center blog-titles"> 
                                {/* <span className="text-color text-small-name fw_bold fs_18">Blogs</span> */}
                                <h2 className="text-title text-color fw_7 ls_5 text-uppercase fs_20">Blogs</h2>
                                <h1 className="fw_4 text-gray mt-4 line_height_50">                                     
                                    <span className="fw_2">Get all the latest updates & news</span> <br />
                                    <span className="fw_6">from the world of pathology here</span>
                                </h1> 
                            </div>                            
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-md-11 col-12 mx-auto mt-4">
                            <div className="Blog-list-grid grid-3 mtb-50"> 
                                {renderItems}
                            </div>
                            {hasMore ? <div className="text-center mb-100">
                                <span className="text-color mx-auto text-center" style={{cursor:"pointer"}} onClick={(async e=>{
                                    e.preventDefault()
                                    getBlogDetails()                                   
                                })}>
                                    <strong>View More </strong>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6935 7.62525L7.659 1.59075L9.24975 0L18 8.75025L9.24975 17.5005L7.659 15.9097L13.6935 9.87525H0V7.62525H13.6935Z" fill="#DE1A1B"/>
                                    </svg>
                                </span>
                            </div> : null }
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default BlogLists;