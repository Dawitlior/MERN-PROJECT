import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";
import './categories.css'

const Categories = () => {
    const { categoriesData } = useContext(dataContext);
    return (
        <Container className="categories">
            <span style={{color:"black"}} className="categories-span">
                קטגוריות
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3 ">
                    <h3 id="number" className="text-center">{categoriesData.length}</h3>
                </div>
                <BiCategoryAlt size={30} />
            </div>
        </Container>
    );
};
export default Categories;