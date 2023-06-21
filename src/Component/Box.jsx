import React from 'react'
import "./Box.css"
export default function Box() {
  return (
    <div>
        <div className='container mx-auto box-main'>
           <div className='row'>
            <div className='col-lg-3 box-main1 mx-auto'>
                <div className='box-head container'>
                   <div className='row '>
                       <div className='col-lg-3 d-flex justify-content-center master'>
                       <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp" alt="hh"/>
                       </div>
                       <div className='col-lg-9 text-center  master'>
                          <h6>Simon Page</h6>
                          <p>Owner, Mamagato Restaurant</p>
                        </div>
                   </div>
                  
                </div>
                <h5>“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn"</h5>
                <div className='box-para'>
                     <h2>40%</h2>
                     <p>Average net profit increase</p>
                </div>
            </div>
            <div className='col-lg-3 box-main1 mx-auto'>
            <div className='box-head container'>
                   <div className='row'>
                       <div className='col-lg-3  d-flex justify-content-center  master'>
                          <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp" alt="hh"/>
                       </div>
                       <div className='col-lg-9 text-center master'>
                           <h6>Daniel Wilson</h6>
                           <p>Marketing head, The Air Conditioning Company</p>
                        </div>
                   </div>
                  
                </div>
                <h5  className='hello'>“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”</h5>
                <div className='box-para'>
                     <h2>200%</h2>
                     <p>New review growth</p>
                </div>
            </div>
            <div className='col-lg-3 box-main1 mx-auto'>
            <div className='box-head container'>
                   <div className='row'>
                       <div className='col-lg-3  d-flex justify-content-center col-sm-12 master'>
                       <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp" alt="hh"/>
                       </div>
                       <div className='col-lg-9 text-center col-sm-12  master '>
                           <h6>Debbie Rose</h6>
                           <p>Owner, Jiva luxury Sp</p>
                        </div>
                   </div>
                  
                </div>
                <h5>“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”</h5>
                <div className='box-para'>
                       <h2>$120k</h2>
                       <p>Generated with marketing campaign</p>
                 </div>
            </div>
           </div>

        </div>
    </div>
  )
}
