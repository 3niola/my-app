import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "home" onClick={toggle}> HOME</SidebarLink>
                    <SidebarLink to = "blog" onClick={toggle}> BLOG</SidebarLink>
                    <SidebarLink to = "projects" onClick={toggle}> PROJECTS</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;