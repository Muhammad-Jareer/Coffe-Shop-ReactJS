import React, { useRef, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Navbar = () => {

    let logoRef = useRef(null)
    let menuRef = useRef(null)

    const [menu, setMenu] = useState(false)

    const navigation = [
        {
            id: 1,
            title: 'Home',
            to: '',
        },
        {
            id: 2,
            title: 'About',
            to: 'about',
        },
        {
            id: 3,
            title: 'Coffees',
            to: 'coffees',
        },
        {
            id: 4,
            title: 'Shop',
            to: 'shop',
        },
        {
            id: 5,
            title: 'Blog',
            to: 'blog',
        },
        {
            id: 6,
            title: 'Contact',
            to: 'contact',
        },

    ]

    useGSAP(() => {
        let timeline = gsap.timeline();

        timeline.from(logoRef.current, {
            opacity: 0,
            x: "100",
            duration: 1,
            ease: "power3",
        }, "")
        timeline.from(menuRef.current, {
            opacity: 0,
            x: "-300",
            duration: 1,
            ease: "power3",
        }, "")
    })
    
    return (
        <div className="flex justify-between items-center w-full h-16 bg-black fixed z-20 px-8 text-white">
            <div className='max-w-7xl w-full mx-auto flex justify-between items-center'>
                <h1 ref={logoRef} className='text-5xl font-signature'>Coffo</h1>
                <div ref={menuRef}>
                   <ul className='hidden lg:flex items-center gap-10'>
                        {navigation.map(({id, title, to}, index) => (
                            <NavLink
                            key={id}
                            to={to}
                            className={({isActive}) => `text-xl cursor-pointer uppercase hover:scale-110 duration-300 font-semibold px-2 py-8 ${isActive ? "text-red-600" : "text-white"}`}
                            >
                            {title}
                            </NavLink>
                        ))}
                   </ul>
                   <div className='flex gap-14'>
                        <div
                        onClick={() => setMenu(!menu)}
                        className='lg:hidden cursor-pointer text-gray-500 hover:scale-105 duration-300 z-20'
                        >
                                {menu ? <FaTimes size={35} /> : <FaBars size={35} />}
                        </div>
                   </div>
                </div>

                {menu && (
                    <div className='right-0 w-1/2 h-3/4 absolute top-16 z-40 text-center'>
                        <ul
                        className='flex flex-col text-white items-center  bg-black'
                        >
                            {navigation.map(({id,title, to}) => (
                                <NavLink
                                onClick={() => setMenu(!menu)}
                                key={id}
                                to={to}
                                className={({isActive}) => `text-2xl cursor-pointer uppercase font-semibold py-3 lg:px-4 lg:py-8 hover:scale-110 duration-300  ${isActive ? "text-red-600 max-w-7xl w-full" : "bg-transparent"}`}
                                >
                                {title}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                    
                )}

                <div className='hidden xl:flex gap-6'>
                    <NavLink to="signup" className=''><FaUserAlt className='inline mx-3' />SIGN UP</NavLink>
                    <button><FaSearch /></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
