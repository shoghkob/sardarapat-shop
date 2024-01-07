import React, { useEffect, useState } from 'react';


const Pagination = ({ count, pageSize, changePage, currentPage, prePage, nextPage }) => {
  const pagesCount = Math.ceil(count / pageSize)

  let pageNumbers = []

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i)
  }

  const handleNextPage = () => {
    console.log(123);
  }


  return (

    <>
      <ul className={`flex items-center -space-x-px h-8 text-sm justify-center mt-12 mb-10`}>
        <li>
          <button className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={prePage}>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>

        <li className='flex'>
          {pageNumbers.map(number => <button
            key={number}
            className={`flex items-center justify-center px-3 h-8 leading-tight  ${number == currentPage ? `bg-blue-400` : 'text-gray-600'} bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            value={number}
            onClick={changePage}
          >{number}</button>)}
        </li>

        <li>
          <button className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 rounded-r-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' onClick={nextPage}>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Pagination;