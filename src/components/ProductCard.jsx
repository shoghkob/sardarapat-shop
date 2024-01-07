import React from 'react'

const ProductCard = ({ product, addToCart }) => {
 
  return (
    <div className='w-[255px] h-[355px] border-solid border-[4px] border-[#f6f7f8] rounded-[5px]'>
      <div className='w-[250px] h-[250px] object-cover'><img src={product.image} className='w-full h-full' /></div>
      <div className='flex justify-between '>
        <h1 className='text-[22px] text-black font-sans font-bold ml-2 mt-3'>{product.name}</h1>
        <p className='text-[18px] text-[#9f3004] flex items-center mt-[15px] mr-[15px]'>{product.price}</p>
      </div>
      <div className='grid columns-1'>
        <button
          onClick={() => addToCart(product)}
          className='mt-[10px] pt-[10px] pb-[10px] border-none bg-none outline-none bg-[#1c2430] text-[#fff] rounded-[5px] cursor-pointer transition-[0.5s] hover:bg-[#3a5158]'
        >Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard