import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ cartItemsCount }) => {
    return (
        <div className='lg:flex hidden items-center'>
            <ul className='flex gap-5'>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Գլխավոր</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Լուրեր</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Մեր մասին</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Ակումբ</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Թիմեր</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Աջակցել</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="text-[#eadfcd] text-[15px] font-bold">Հետադարձ կապ</NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-5 mx-5'>
                <Link href="#" className="text-[#eadfcd] text-[15px] font-bold">
                    <img src="image/usa.png" />
                </Link>
                <Link href="#" className="text-[#eadfcd] text-[15px] font-bold">
                    <img src="image/france.png" />
                </Link>
                <Link href="#" className="text-[#eadfcd] text-[15px] font-bold">
                    <img src="image/armenia.png" />
                </Link>
            </div>
            <div className='ml-8'>
                <NavLink to="/cart" className="link relative text-white">
                    {cartItemsCount > 0 && <span className='m-0 absolute text-xs bg-red-500 text-white -top-1 p-[2px] -right-1 rounded-md'>{cartItemsCount}</span>}
                    <RiShoppingCart2Line size={20}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar