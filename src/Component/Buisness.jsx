import React from 'react'
import "./Buisness.css"
export default function Buisness({value1,value2,value3}) {
  return (
    <div>
       <h2 className='buis'>Tools to take your business to next level</h2>
        <div className='container '>
          
            <div className='row '>
                <div className="col-lg-3 mx-auto buis-box">
                     <h3>Attract</h3>
                     <p>Attract more customers</p>
                     <div className='buis-img'>
                     {
                            value1?.map((item,index)=>
                            <div className='row'>
                            <div className='col-lg-3'>
                            <img src={item.image} alt={index}/>
                            </div>
                            
                            <div className='buis-para col-lg-9'>
                            <a href="/#">{item.link}</a>
                            <p>{item.para}</p>
                            </div>
                            </div>
                            )
                        }
                      
                     </div>
                </div>
                <div className="col-lg-3 mx-auto buis-box">
                    <h3>Engage</h3>
                    <p>Convert leads to customers</p>
                    <div className=' buis-img'>

                        {
                            value2?.map((item,index)=>
                            <div className='row'>
                            <div className='col-lg-3'>
                            <img src={item.image} alt={index}/>
                            </div>
                            
                            <div className='buis-para col-lg-9'>
                            <a href="/#">{item.link}</a>
                            <p>{item.para}</p>
                            </div>
                            </div>
                            )
                        }
                      
                     </div>
                </div>
                <div className="col-lg-3 mx-auto buis-box">
                    <h3>Elevate</h3>
                    <p>Provide a delightful experience</p>
                    <div className='buis-img'>
                    {
                            value3?.map((item,index)=>
                            <div className='row'>
                            <div className='col-lg-3'>
                            <img src={item.image} alt={index}/>
                            </div>
                            
                            <div className='buis-para col-lg-9'>
                            <a href="/#">{item.link}</a>
                            <p>{item.para}</p>
                            </div>
                            </div>
                            )
                        }
                      
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}
