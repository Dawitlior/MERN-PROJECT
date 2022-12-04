import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context';
import { IconName, IoIosAlbums } from "react-icons/io";
import './information.css';


const InformationPage = () => {
    const { informationPageData } = useContext(dataContext);
    return (
        <Container className="InformationPage">
            <span className="informationPage-span">
                דפי מידע
            </span>
            <div className=" container-fluid">
                <div className="iconAndNumber pt-3">
                    <h3 id="number" className="text-center">{informationPageData.length}</h3>
                </div>
                <IoIosAlbums size={30} />
            </div>
        </Container>
    );
};
export default InformationPage;