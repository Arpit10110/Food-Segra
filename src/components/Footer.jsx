import React from 'react'
import "../style/footer.css"
import logo from "../assets/logo.png"
//material icon
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer>
      <div className="footerUper">
          <img src={logo} alt="FoodSegra" />
        <div className="H-line"></div>
          <h3>Food Segregation Platform</h3>
      </div>
      <div className="partion"></div>
      <div className="footerdown">
      <div className="copyrightDiv">
        <h3>Copyright © 2023 3legant. All rights reserved</h3>
        <h3>Privacy Policy</h3>
        <h3>Terms of Use</h3>
      </div>
      <div className="social">
        <FacebookIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
