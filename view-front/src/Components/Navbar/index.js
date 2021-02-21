import React from 'react';
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer, 
    NavbarLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks } from './NavbarElements';


function Navbar() {
    return (
        <>
        <Nav>
            <NavbarContainer>
            <NavbarLogo to='/'>
                AusIND
            </NavbarLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="home"> Home </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about"> About us </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact"> Contact us </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="commercial"> Commercial </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="blog"> Blog </NavLinks>
                </NavItem>
            </NavMenu>
                

            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
