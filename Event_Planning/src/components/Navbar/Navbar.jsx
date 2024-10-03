import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    const [navHeight, setNavHeight] = useState(false);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
    return (
        <>
            <nav className={navHeight ? "show nav" : "nav"}>
                <div className='logo' onClick={() => goToHome()}>LUXURY RENTAL</div>
                <ul>
                    <li>
                        <Link to='/aboutus'>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to='/villas'>VILLAS</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                </ul>
                <RxHamburgerMenu className="hamburger" onClick={() => setNavHeight(!navHeight)} />
            </nav>
        </>
    )
}

export default Navbar