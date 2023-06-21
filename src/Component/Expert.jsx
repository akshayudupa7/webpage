import React from 'react'
import "./Expert.css"
export default function Expert({source1}) {
  return (
    <div className='container expert-box '>
        <h2 className='disc'>Expert Insights and Resources</h2>
        <p className=' text-center'>Get the latest business intelligence relevant to your industry, designed to help you grow.</p>
            <div className='part'>
         
            {
                    source1?.map((item,index)=>
                    <div className='gap'>
                    <img src={item.image} alt={index}/>
                    <h3>{item.head}</h3>
                    <p>{item.para}</p>
                    </div>
                    )
                }
           
         
            </div>
             
       
    </div>
  )
}
