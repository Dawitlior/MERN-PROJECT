import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { dataContext } from '../../../contexts/allData.context'
import { IoIosWalk } from "react-icons/io";
import './department.css'
//
const Departments = () => {
    const { departmentDate } = useContext(dataContext);
    return (
        <Container className="department">
            <span style={{ color: "black" }} className="department-span">
                מחלקות
            </span>
            <div className="container-fluid">
                <div className="iconAndNumber pt-3">
                    <h3 id="number" className="text-center">{departmentDate.length}</h3>
                </div>
                <IoIosWalk size={30} />
            </div>
        </Container>
    );
};
export default Departments;