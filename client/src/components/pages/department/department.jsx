import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { BiCategoryAlt } from "react-icons/bi";

const Departments = () => {
    const { departmentDate } = useContext(dataContext);
    return (
        <Container>
            <div className="department container-fluid">
                <div className="iconAndNumber pt-3 d-flex">
                    מחלקות
                    <h3 id="number" className="text-center">{departmentDate.length}</h3>
                    <BiCategoryAlt size={30} />
                </div>
            </div>
        </Container>
    );
};
export default Departments;