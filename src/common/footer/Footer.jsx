import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>MegaMart</h1>
            <p>Find everything you need under one virtual roof at MegaMart, your mega online store.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Get to Know Us</h2>
            <ul>
              <li>About Us</li>
              <li>Our Stores</li>
              <li>Careers</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Let Us Help You</h2>
            <ul>
              <li>Help Center </li>
              <li>Your Account </li>
              <li>Track Your Order </li>
              <li>Help </li>
              <li>Returns Centre </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact with Us</h2>
            <ul>
            <li><a href="https://www.facebook.com/alokkashyap1828/">Facebook</a></li>
            <li><a href="https://github.com/alokjha1999">Github</a></li>
            <li><a href="https://instagram.com/aloktechnology?igshid=MzNlNGNkZWQ4Mg==/">Instagram</a></li>
              <li> jhaalok305@gmail.com</li>
              <li>+91 8709 488 019</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
