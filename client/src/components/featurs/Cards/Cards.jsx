import "./cards.css"
import React from 'react'
import Categories from '../../pages/categories/categories'
import Departments from '../../pages/department/department';
import InformationPage from '../../pages/information/information';
import Products from '../../pages/product/products';
import Stores from '../../pages/stores/stores';
import { Container } from "react-bootstrap";
function Cards() {
    return (
        <Container className='cards-div'  >
            <Products />
            <Departments />
            <Categories />
            <InformationPage />
            <Stores />
        <Container className='chart'>

            </Container>
            {/* <div className='chart'>
            </div>
            <div className='chart'>
                
            </div>
            <div className='chart'>
            </div>
            <dir className='chart'>
            </dir> */}
        </Container>
    )
}

export default Cards