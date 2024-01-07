import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { productsData } from './productsData.js';
import Pagination from "./Pagination.jsx";

const Home = ({addToCart}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageData, setPageData] = useState(null)
    const pageSize = 10
    const pagesCount = Math.ceil(productsData.length / pageSize) 

    const changePage = (e) => {
        const selectedPage = e.target.value

        setCurrentPage(selectedPage)
    }
    const prePage = () => {
        const previousPage = currentPage > 1 ? currentPage - 1 : 1;
        console.log(previousPage)
        setCurrentPage(previousPage);
    };

    const nextPage = () => {
        const a = currentPage < pagesCount ? currentPage + 1 : pagesCount;
        setCurrentPage(a);
    };

    useEffect(() => {
        const firstIndex = pageSize * (currentPage - 1)
        const lastIndex = firstIndex + pageSize
        const sliced = productsData.slice(firstIndex, lastIndex)
        setPageData(sliced)
    }, [currentPage])

    return (
        <>
            <div className="w-full">
                <img src="image\banner_heading.jpeg" className="w-full h-[400px] object-cover"></img>
            </div>
            <h1 className=" text-[#000] font-bold text-[30px] text-center font-[cursive] my-3 px-4 lg:text-[60px] md:text-[40px]">Sardarapat FC Shop</h1>
            <div className={'grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center gap-y-5 gap-x-1 max-w-full'}>
                {pageData?.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart}/>)}
            </div>

            <Pagination changePage={changePage} count={productsData.length} pageSize={pageSize} currentPage={currentPage} prePage={prePage} nextPage={nextPage} />
        </>
    )
}

export default Home;
