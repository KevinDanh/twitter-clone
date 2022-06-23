import React from "react";
import './Sidebar.css';

import TwitterIcon from '@mui/icons-material/Twitter';import Tag from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import SidebarOptions from './SidebarOption';
import { Button } from "@mui/material";

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={Tag} text="Explore" />
            <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
            <SidebarOptions Icon={MailIcon} text="Messages" />
            <SidebarOptions Icon={BookmarksIcon} text="Bookmarks" />
            <SidebarOptions Icon={ListAltIcon} text="Lists" />
            <SidebarOptions Icon={PersonIcon} text="Profile" />
            <SidebarOptions Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;