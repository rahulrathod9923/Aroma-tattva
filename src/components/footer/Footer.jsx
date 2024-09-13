import React from 'react'
import './Footer.css'
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import facebookIcon from '/assets/logo/facebook.png'
import instagramIcon from '/assets/logo/instagram.png'

function Footer() {
    return (
        <div className='footer-container'>

            <div className="footer-about-urls-container">
                <a className='footer-about-urls' href='https://www.google.com/maps/search/?api=1&query=Porwal+Road,+Lohegaon,+Pune,+India' target='_blank'>
                    <HiLocationMarker /> Porwal Road, Lohegaon, Pune, India, Maharashtra
                </a>

                <a className='footer-about-urls' href='tel:+919834556483'>
                    <HiOutlinePhone /> +91 98345 56483
                </a>

                <a className='footer-about-urls' href='mailto:tattvaaroma@gmail.com'>
                    <HiOutlineMail /> tattvaaroma@gmail.com
                </a>
            </div>

            <div className="footer-social-icons">
                <a className='footer-about-urls' href='https://www.facebook.com/profile.php?id=100083439426265'>
                    <img className='footer-facebook-icon' src={facebookIcon} alt="this image is not supported on your browser" />
                </a>

                <a className='footer-about-urls' href='https://www.instagram.com/aromatattva/'>
                    <img className='footer-instagram-icon' src={instagramIcon} alt="sorry not supported" />
                </a>
            </div>

        </div>
    )
}

export default Footer