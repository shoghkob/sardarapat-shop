import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

const Menu = ({ open, cartItemsCount }) => {
    return (
        <div className={`fixed top-[120px] w-full h-screen z-50 lg:hidden block bg-[#9f3004] transition duration-300 px-4 py-5 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex my-5 justify-between items-center'>
                <div className='flex items-center gap-5 text-[#eadfcd] text-[15px] font-bold'>
                    <Link to="/">
                        <img src="image/usa.png" />
                    </Link>
                    <Link to="/">
                        <img src="image/france.png" />
                    </Link>
                    <Link to="/">
                        <img src="image/armenia.png" />
                    </Link>
                </div>
                <div>
                    <NavLink to="/cart" className="link relative text-white">
                        {cartItemsCount > 0 && <span className='m-0 absolute text-xs bg-red-500 text-white -top-1 p-1 -right-1 rounded-md'>{cartItemsCount}</span>}
                        <RiShoppingCart2Line size={20} />
                    </NavLink>
                </div>
            </div>
            <ul className='flex flex-col gap-5 text-[#eadfcd] text-[15px] font-bold'>
                <li>
                    <NavLink to="/">Գլխավոր</NavLink>
                </li>
                <li>
                    <NavLink to="/">Լուրեր</NavLink>
                </li>
                <li>
                    <NavLink to="/">Մեր մասին</NavLink>
                </li>
                <li>
                    <NavLink to="/">Ակումբ</NavLink>
                </li>
                <li>
                    <NavLink to="/">Թիմեր</NavLink>
                </li>
                <li>
                    <NavLink to="/">Աջակցել</NavLink>
                </li>
                <li>
                    <NavLink to="/">Հետադարձ կապ</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu