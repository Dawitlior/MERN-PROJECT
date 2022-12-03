import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

const Navbar = ()=> {
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>
                        <img
                            src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
export default Navbar