import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const InformationPage = () => {
    const { informationPageData } = useContext(dataContext);
    return (
        <Container className="InformationPage">
            <span className="informationPage-span">
                דפי מידע
            </span>
            <div className=" container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    <h3 id="number" className="text-center">{informationPageData.length}</h3>
                </div>
                <BiCategoryAlt size={30} />
            </div>
        </Container>
    );
};
export default InformationPage;