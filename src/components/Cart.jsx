import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";

const Cart = ({ cart, incrementQty, decrementQty, removeProduct }) => {
  return (
    <>

      <div>
        {cart.length > 0
          ?
          <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center gap-y-5 gap-x-1 max-w-full'>
            {cart.map(product => (
              <>

                <div className='relative mt-[20px] ml-[27px] w-[255px] h-[355px] border-solid border-[4px] border-[#f6f7f8] rounded-[5px] '>
                  <button onClick={() => removeProduct(product.id)} className='absolute z-10 top-2 right-2 bg-[#9f3004] text-white p-1 rounded-md'><CiCircleRemove size={24} strokeWidth={1.1} /></button>

                  <div className='w-[250px] h-[250px] object-cover'><img src={product.image} className='w-full h-full' /></div>
                  <div className='flex justify-between '>
                    <h1 className='text-[22px] text-black font-sans font-bold ml-2 mt-3'>{product.name}</h1>
                    <p className='text-[18px] text-[#9f3004] flex items-center mt-[15px] mr-[15px]'>{product.price}</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button onClick={() => decrementQty(product.id)} className='border-2px text-[#000]'><PiMinusBold /></button>
                    <p className='mx-[10px]'>{product.qty}</p>
                    <button onClick={() => incrementQty(product.id)}><PiPlusBold /></button>
                  </div>
                </div>
              </>
            )
            )}
          </div>
          :
          <div className='w-full flex justify-center'>
            <h1 className='text-[20px] mt-5'>Cart is empty</h1>
          </div>
        }
      </div>
    </>
  )
}

export default Cart