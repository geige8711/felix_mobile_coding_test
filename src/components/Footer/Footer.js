// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './Footer.css'
import {
    FaFacebookSquare,
    FaTwitter,
    FaYoutube,
    FaFlickr,
} from 'react-icons/fa'
import { useWindowWidth } from '@react-hook/window-size/throttled'

const Footer = () => {
    const windowWidth = useWindowWidth()
    return (
        <div className="footer-root">
            <div className="footer-nav-welcome-container">
                <div className="footer-nav-welcome-content">
                    <img
                        src="https://sdgs.un.org/themes/custom/porto/assets/images/logo-footer-white.svg"
                        alt=""
                        className="footer-logo"
                    />
                    <div className="footer-nav-welcome-right">
                        <span className="footer-right-desc">
                            Join the conversation:
                        </span>
                        <span className="footer-media">
                            <FaFacebookSquare
                                size={windowWidth < 768 ? 16 : 24}
                            />
                        </span>
                        <span className="footer-media">
                            <FaTwitter size={windowWidth < 768 ? 16 : 24} />
                        </span>
                        <span className="footer-media">
                            <FaYoutube size={windowWidth < 768 ? 16 : 24} />
                        </span>
                        <span className="footer-media">
                            <FaFlickr size={windowWidth < 768 ? 16 : 24} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer-nav-link-container">
                <div className="footer-nav-link-content">
                    <span className="footer-nav-item">contact</span>
                    <span className="footer-nav-item">copyright</span>
                    <span className="footer-nav-item">fraud alert</span>
                    <span className="footer-nav-item">privacy notice</span>
                    <span className="footer-nav-item">terms of use</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
