import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { IoIosCart } from "react-icons/io";
import './stores.css'

//IoIosCart

const Stores = () => {
    const { storesData } = useContext(dataContext);
    return (
        <Container className="store">
            <span className="store-span">
                חנויות
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3">
                    <h3 id="number" className="text-center">{storesData.length}</h3>
                </div>
                <IoIosCart size={30} />
            </div>
        </Container>
    );
};
export default Stores;