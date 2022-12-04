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
        <Container className='cards-div'>
            <div className="products">
            <Products />
            </div>
            <div className="categories">
            <Categories />
            </div>
            <div className="infoPages">
            <InformationPage />
            </div>
            <div className="stores">
            <Stores />
            </div>
            <div className="departments">
                <Departments/>
            </div>
        </Container>
    )
}

export default Cards