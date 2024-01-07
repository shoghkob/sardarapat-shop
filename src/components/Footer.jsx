import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='relative px-4 max-w-7xl my-0 mx-auto'>
            <div className='flex justify-center '>
                <div className='border-b-[1px] border-solid border-gray-300 w-[70%] mb-[50px]'>
                    <div className="flex justify-end">
                        <Link to="https://www.facebook.com/SardarapatFC" target="_blank"><FaFacebookF className="my-[15px] mr-[13px] text-[#9f3004] transition-[0.5s] cursor-pointer" size={17} /></Link>
                        <Link to="https://www.instagram.com/sardarapatfc/" target="_blank"><FaInstagram className="my-[15px]  mr-[13px] text-[#9f3004] transition-[0.5s] cursor-pointer" size={17} /></Link>
                        <Link to="https://www.linkedin.com/company/sardarapat-fc/" target="_blank"><FaLinkedin className="my-[15px]  mr-[13px] text-[#9f3004] transition-[0.5s] cursor-pointer" size={17} /></Link>
                        <Link to="https://www.youtube.com/channel/UC2vOagcW2tErSkhsMl3ux-g" target="_blank"><FaYoutube className="my-[15px]  mr-[13px] text-[#9f3004] transition-[0.5s] cursor-pointer" size={17} /></Link>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-5 lg:place-items-baseline md:place-items-start'>
                <div>
                    <p className='text-[#9F3004] text-[15px]'>Մեր մասին</p>
                    <ul className='text-[#1C2430] text-[14px] mt-[5px]'>
                        <li>Սարդարապատ ՖԱ</li>
                        <li>Փիլիսոփայություն</li>
                        <li>Ենթակառուցվածք</li>
                        <li>Լանս ՖԱ համագործակցություն</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[#9F3004] text-[15px]'>Օգնություն</p>
                    <ul className='text-[#1C2430] text-[14px] mt-[5px]'>
                        <li>Հետադարձ կապ</li>
                        <li>Գաղտնիության քաղաքականություն</li>
                        <li>Ընդհանուր դրույթներ և պայմաններ</li>
                        <li>Աջակցել</li>
                        <li>Հաճախ տրվող հարցեր</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[#9F3004] text-[15px]'>Ակումբ</p>
                    <ul className='text-[#1C2430] text-[14px] mt-[5px]'>
                        <li>Հիմնադիրներ</li>
                        <li>Տնօրենություն</li>
                        <li>Տեխնիկական անձնակազմ</li>
                    </ul>
                </div>
                <div >
                    <p className='text-[#9F3004] text-[15px] '>Բաժանորդագրվել նորություններին</p>
                    <input type="text" placeholder='Մուտքագրեք ձեր էլ․ փոստը' className='w-full h-[50px] rounded-3xl text-[13px] border px-2 outline-none mt-[5px]' />
                    <input type="submit" value={"Բաժանորդագրվել"} className='bg-[#9F3004] w-full rounded-3xl h-[50px] text-[13px] cursor-pointer text-white mt-[5px]' />
                </div>
            </div>
            <div className='flex justify-center '>
                <div className='border-t-[1px] border-solid border-gray-300 w-[70%] mb-[15px] mt-10'>
                    <h5 className='text-center font-bold mt-[10px] text-[14px]'>Sardarapat FC. All rights reserved.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer