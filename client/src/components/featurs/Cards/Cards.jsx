import "./cards.css"
import React, { useContext } from 'react'
import { dataContext } from '../../../contexts/allData.context';
import Categories from '../../pages/categories/categories'
import Departments from '../../pages/department/department';
import InformationPage from '../../pages/information/information';
import Products from '../../pages/product/products';
import Stores from '../../pages/stores/stores';
function Cards() {
    const { productData, departmentDate, categoriesData, ordersData, informationPageData, storesData } = useContext(dataContext)
    return (
        <div className='cards-div' style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
            <div className='chart'>
                <Products />
            </div>
            <div className='chart'>
                <Departments />
            </div>
            <div className='chart'>
                <Categories />
            </div>
            <div className='chart'>
                <InformationPage />
            </div>
            <dir className='chart'>
                <Stores />
            </dir>
        </div>
    )
}

export default Cards