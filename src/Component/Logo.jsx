import React from 'react'
import "./Logo.css"
export default function Logo({source}) {
  return (
    <div className='logo container'>
     
        <h2>
        Trusted by 100,000+ local businesses globally
        </h2>
        <div className='row'>
          <div className='col-md-12 col-sm-4'>
          {
        source?.map((item,index)=>
        <img src={item.pic} alt="index"/>
        )
      }
          </div>
        </div>
    
    </div>
  )
}
