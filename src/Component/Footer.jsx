import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>
    <div className='footer'>
        <h2>Ready to grow?</h2>
        <p>See why 100,000+ businesses trust us. Book a personalized demo to see how SalesCaptain provides you the right tools to grow your business.</p>
        <div>
        <input type="text" placeholder="ENTER THE TEXT"/>
        <button >Get Demo</button>
        </div>
        <div className='star'>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp" alt="pic"/>
            <b>5000+ Reviews</b>
        </div>
        <div className='symbol'>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp" alt="pic"/>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp" alt="pic"/>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp" alt="pic"/>
        </div>
 
    </div>

    <div className='container-fluid social'>
       <div className='row'>
         <div className='col-lg-4'>
         <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp" alt="footerimg"/>
         </div>
         <div className='col-lg-2'>
         <p> <b>Industry</b>   </p>
         <p> <a href="/#">Dental</a>  </p>
         <p> <a href="/#">Healthcare</a> </p>
         <p><a href="/#">Services</a> </p>
         <p><a href="/#">Retail</a>  </p>
         <p><a href="/#">Hospitality</a> </p>
         <p> <a href="/#">Automative</a> </p>
         <p> <a href="/#">Resturant</a> </p>
         <p> <a href="/#">Wellness</a> </p>
         <p> <a href="/#">Professional Services</a> </p>
          </div>
         <div className='col-lg-2'>
             <p><b>Patner</b></p>
             <p> <a href="/#">Become a patner</a></p>
             <p> <b>Company</b></p>
             <p><a href="/#">Contact</a></p>
             <p><a href="/#">Carrer</a></p>
             <p><a href="/#">Press</a></p>
             <p><a href="/#">Patners</a></p>
             <p><a href="/#">Legals</a></p>
        </div>
        <div className='col-lg-4'>
        <p> <b>US Headquarters</b>  </p>
        <p>  <a href="/#">447 Broadway,<br/>2nd Floor,<br/>New York 10013</a>  </p>
        <p>   <b>Indian Office</b>  </p>
        <p>    <a href="/#">1467 Janani <br/>HSRLayout Bengaluru <br/>Karnataka 560102</a>  </p>
        </div>
       </div>
       <div>
          
       </div>
    </div>
    </>
  )
}
