import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const Categories = () => {
    const { categoriesData } = useContext(dataContext);

    return (
        <Container className="categories">
            <span className="categories-span">
                קטגוריות
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    <h3 id="number" className="text-center">{categoriesData.length}</h3>
                </div>
                <BiCategoryAlt size={30} />
            </div>
        </Container>
    );
};
export default Categories;