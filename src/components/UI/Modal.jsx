import React from 'react'
import portfolioData from '../../assets/data/portfolioData'



const Modal = ({activeID,setShowModal}) => {

 


  return (
    // <div className="w-full_h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
    // <div className= "max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform-translate-x-1/2 -translate-y-1/2 p-5">
    // <div>
    // <figure>
    <div>
            <img  src={portfolioData.imgUrl} alt="" />
    </div>

    // </figure>
    // </div>
    // <div>
    // <h2 className= "text-2xl text-headingColor font-[700] my-5">
    // {portfolio.title}
    // </h2>
    // <p className="text-[15px] leading-7 text-smallTextColor">{portfolio.description}</p>
    // </div>
    // </div>
    // </div>  
  )
}

export default Modal;