import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const Products = () => {
    const { productData } = useContext(dataContext);
    return (
        <Container className="products">
            <span className="products-span">
                מוצרים
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    <h3 id="number" className="text-center">{productData.length}</h3>
                </div>
                    <BiCategoryAlt size={30} />
            </div>
        </Container>
    );
};
export default Products;