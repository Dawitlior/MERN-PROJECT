import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const Stores = () => {
    const { storesData } = useContext(dataContext);
    return (
        <Container>
            <div className="department container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    מוצרים
                    <h3 id="number" className="text-center">{storesData.length}</h3>
                    <BiCategoryAlt size={30} />
                </div>
            </div>
        </Container>
    );
};
export default Stores;