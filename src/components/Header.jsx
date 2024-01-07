import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';

const Header = ({ cartItemsCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    }, [menuOpen])

    return (
        <div className='fixed w-full top-0 left-0 z-50'> 
            <Menu open={menuOpen} cartItemsCount={cartItemsCount} />
            <div className="w-full h-[45px] bg-[#eadfcd]">
                <div className="w-full flex justify-end mr-[19rem]">
                    <Link to="https://www.facebook.com/SardarapatFC" target="_blank"><FaFacebookF className="my-[15px] mr-[18px] text-[#9f3004] transition-all duration-500 cursor-pointer hover:text-[#808080] hover:mt-[8px] icon" size={12} /></Link>
                    <Link to="https://www.instagram.com/sardarapatfc/" target="_blank"><FaInstagram className="my-[15px]  mr-[18px] text-[#9f3004] transition-all duration-500 cursor-pointer hover:text-[#808080] hover:mt-[8px] icon" size={12} /></Link>
                    <Link to="https://www.linkedin.com/company/sardarapat-fc/" target="_blank"><FaLinkedin className="my-[15px]  mr-[18px] text-[#9f3004] transition-all duration-500 cursor-pointer hover:text-[#808080] hover:mt-[8px] icon" size={12} /></Link>
                    <Link to="https://www.youtube.com/channel/UC2vOagcW2tErSkhsMl3ux-g" target="_blank"><FaYoutube className="my-[15px]  mr-[18px] text-[#9f3004] transition-all duration-500 cursor-pointer hover:text-[#808080] hover:mt-[8px] icon" size={12} /></Link>
                </div>
            </div>
            <div className='bg-[#9f3004] h-[75px] flex justify-center'>
                <div className="w-full max-w-4xl my-0 mx-auto px-4 flex items-center justify-between gap-5">
                    <Link to={'/'} className='relative flex items-center'>
                        <img src="image/logo.png" className="lg:w-16 w-8" />
                    </Link>

                    <Navbar cartItemsCount={cartItemsCount} />

                    <div onClick={handleNav} className='lg:hidden z-[51] flex items-center ml-[12rem] text-white cursor-pointer'>
                        {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header