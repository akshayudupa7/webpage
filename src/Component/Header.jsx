import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/#"><img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp" alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlist">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Resources</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Support</a>
        </li>  
      </ul>
      <form class="d-flex" >
      <button className="btn1 border-none">Sign In</button>
        <button className="btn2" type="submit">Get Started</button>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}
