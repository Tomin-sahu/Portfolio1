import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='MainFooter'>
        <div className='FooterContainer'>
            <ul className='FooterItemsUl'>
                <h2>Address</h2>
                <li>Jewartala (Road)</li>
                <li>Pin Code- 491771</li>
                <li>Near to Rajnandgaon</li>
                {/* <li>Estate,</li>
                <li>Andheri</li>
                <li>East,Mumbai-400093</li> */}
            </ul>
            <ul className='FooterItemsUl'>
                <h2>Help & Info</h2>
                <li><Link className='FootAboutUs' to="/">About Me</Link></li>
                <li className='ExtraMargin'>Careers</li>
                <li className='ExtraMargin'><Link to="/" className="FootFAQs">FAQs</Link></li>
            </ul>
            <ul className='FooterItemsUl'>
                <h2>Contact Us</h2>
                <li>Email : tominsahu321@gmail.com</li>
                <li className='ExtraMargin'>Mo. No. : 7898379442</li>
                {/* <li className='ExtraMargin'></li> */}
            </ul>
            {/* <ul className='FooterItemsUl'>
                <h2>Useful Links</h2>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Payment Issues</li>
                <li>Net Banking</li>
                <li>Custom Order</li>
            </ul> */}
        </div>

        <div className='SocialMedia'>
            <h3>Follow Us on :</h3>
            <FaFacebookF className='MediaIcons'/>
            <FaInstagram className='MediaIcons'/>
            <FaWhatsapp className='MediaIcons'/>
            <FaXTwitter className='MediaIcons'/>
        </div>
        </div>

        <div className='CopyRight'>
            <h5>@2023 All Copy Rights Reserved</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
