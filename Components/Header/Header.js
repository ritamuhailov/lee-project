import style from "../Header/Header.module.css"
import React from 'react';
import Link from 'next/link'
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <nav className="header">
            <Navbar />
        </nav>
    )

}

export default Header; 