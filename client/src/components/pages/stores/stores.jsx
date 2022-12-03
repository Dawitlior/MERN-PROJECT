import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const Stores = () => {
    const { storesData } = useContext(dataContext);
    return (
        <Container className="department">
            <span className="store-span">
                חנויות
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    <h3 id="number" className="text-center">{storesData.length}</h3>
                </div>
                <BiCategoryAlt size={30} />
            </div>
        </Container>
    );
};
export default Stores;