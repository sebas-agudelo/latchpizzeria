import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";



export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);


    const navLinks = [
        { label: "Startsida", path: "/" },
        { label: "Meny", path: "/meny" },
        { label: "Om oss", path: "om-oss" },
        { label: "Kontakta oss", path: "kontakta-oss" }
    ]

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <nav>
                <div className='open-burger-menu-container'>
                    <button onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                        <AiOutlineMenu />
                    </button>
                </div>

                <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} >
                    <div className='close-nav-btn-container'>
                        <button
                            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                        >
                            <IoCloseSharp id='close-nav-icon'/>
                        </button>
                    </div>

                    <div className='mobile-nav-links-logo-container'>
                        <div className='logo-img-container'>
                            <img src="latch-logo-v4.png" alt="logo" />
                        </div>
                    </div>

                    <motion.ul
                        className="nav-links-container"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                    >


                        {navLinks.map((items, li) => (
                            <motion.li key={li} variants={itemVariants}>
                                <NavLink
                                    to={`${items.path}`}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    {items.label}
                                </NavLink>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <div className='nav-logo-container'>
                    <div className='logo'>
                        <img src="latch-logo-v4.png" alt="Logo" />
                    </div>

                </div>

                <div className='nav-order-btn-container'>
                    <button>
                        <Link to={`/meny`}>BESTÄLL</Link>
                    </button>
                </div>
            </nav>
        </>
    );
}
