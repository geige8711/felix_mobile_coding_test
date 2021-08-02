// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaHome, FaSearch, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size/throttled'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const windowWidth = useWindowWidth()
    useEffect(() => {
        if (windowWidth >= 992) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [windowWidth])
    return (
        <div className="header-root">
            <div className="header-nav-welcome-container">
                <div className="header-nav-welcome-content">
                    <Link to="/">
                        <FaHome style={{ marginRight: '10px' }} size={16} />
                        Welcome to the United Union
                    </Link>
                </div>
            </div>
            <div className="header-nav-title-container">
                <div className="header-nav-title-content">
                    <Link to="/">
                        <img
                            src="https://sdgs.un.org/themes/custom/porto/assets/images/logo.svg"
                            alt=""
                            className="header-logo"
                        />
                    </Link>
                    <div className="header-nav-title1">
                        <div className="header-nav-title-dep">
                            Department of Economic and Social Affairs
                        </div>
                        <div className="header-nav-title-sus">
                            Sustainable Development
                        </div>
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-input" />
                        <button className="search-btn">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div className="header-navbar-container">
                <div className="navbar-icon">
                    <FaBars size={36} onClick={() => setIsOpen((o) => !o)} />
                </div>
                <div
                    className="header-navbar-content"
                    style={isOpen ? {} : { display: 'none' }}
                >
                    <span>Home</span>
                    <span>SDG Knowledge</span>
                    <span>Intergovernmental Processes</span>
                    <span>HLPF</span>
                    <span>SIDS</span>
                    <span>Partnerships</span>
                    <span>Engage</span>
                    <span>News</span>
                    <span>About</span>
                </div>
            </div>
        </div>
    )
}

export default Header
