import React from 'react';
import { FaBars } from "react-icons/fa";
import {Nav, NavbarContainer, NavLogo, NavItem, NavLinks, MobileIcon, NavMenu} from "./NavbarElements";
import SocialFollow from './SocialFollow.js';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to= '/'> AYODELE </NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="blog">BLOG</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">PROJECTS</NavLinks>
                    </NavItem>
                    <SocialFollow/>
                </NavMenu>
            </NavbarContainer>
        </Nav>
            
        </>
    );
};

export default Navbar;
