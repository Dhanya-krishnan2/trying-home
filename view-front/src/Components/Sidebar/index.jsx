import React from 'react';
import { SidebarContainer, Icon, ClosedIcon, SidebarLink, SidebarMenu, SidebarWrapper} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
        <Icon>
            <ClosedIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home">
                 Home
                </SidebarLink>
                <SidebarLink to="about">
                 About
                </SidebarLink>
                <SidebarLink to="contact">
                 About
                </SidebarLink>
                <SidebarLink to="commercial">
                 Commercial
                </SidebarLink>
                <SidebarLink to="blog">
                 Blog
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar;
