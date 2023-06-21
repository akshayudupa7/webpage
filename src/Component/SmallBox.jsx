import React from 'react'
import "./smallBox.css"
export default function SmallBox({value4,value5,value6,value7}) {
  return (
    <div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                {
                    value4?.map((item,index)=>
                    <div className='mx-auto text-center square'>
                       <img src={item.pic} alt={index}/>
                       <h6>{item.para}</h6>
                     </div>  
                    )
                }
              </div>
              <div className='col-lg-3'>
                {
                    value5?.map((item,index)=>
                    <div className='mx-auto text-center square'>
                       <img src={item.pic} alt={index}/>
                       <h6>{item.para}</h6>
                     </div>  
                    )
                }
              </div>
              <div className='col-lg-3'>
                {
                    value6?.map((item,index)=>
                    <div className='mx-auto text-center square'>
                       <img src={item.pic} alt={index}/>
                       <h6>{item.para}</h6>
                     </div>  
                    )
                }
              </div>
              <div className='col-lg-3'>
                {
                    value7?.map((item,index)=>
                    <div className='mx-auto text-center square'>
                       <img src={item.pic} alt={index}/>
                       <h6>{item.para}</h6>
                     </div>  
                    )
                }
              </div>
              
              
            </div>
          </div>
    </div>
  )
}
