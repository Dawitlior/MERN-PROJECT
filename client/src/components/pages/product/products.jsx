import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context';
import { IoMdDesktop } from "react-icons/io";

import './product.css';

const Products = () => {
    const { productData } = useContext(dataContext);
    return (
        <Container className="products">
            <span style={{ color: "black" }} className="products-span">
                מוצרים
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3">
                    <h3 id="number" className="text-center">{productData.length}</h3>
                </div>
                <IoMdDesktop size={30} />
            </div>
        </Container>
    );
};
export default Products;