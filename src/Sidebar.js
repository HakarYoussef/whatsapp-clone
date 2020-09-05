import React, { useState } from 'react';
import './Sidebar.css';
import { RiDonutChartFill, RiSearchLine } from 'react-icons/ri';
import { Avatar, IconButton } from '@material-ui/core';
import { HiPlus, HiDotsHorizontal } from 'react-icons/hi';
import SidebarChat from './SidebarChat';
import MoreDropdown from './MoreDropdown';
import onClickOutside from 'react-onclickoutside';

function Sidebar() {
  const [showMore, setshowMore] = useState(false);
  Sidebar.handleClickOutside = () => setshowMore(false);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        <div className="sidebar__headerRight">
          <IconButton>
            <RiDonutChartFill />
          </IconButton>
          <IconButton>
            <HiPlus />
          </IconButton>
          <IconButton>
            <HiDotsHorizontal onClick={() => setshowMore(!showMore)} />
          </IconButton>

          {showMore && <MoreDropdown />}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <RiSearchLine className="MuSvgIcon-root" />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat name="Mark" msg="Hello!" />
        <SidebarChat name="Edward" msg="got it" />
        <SidebarChat name="Rose" msg="good bye!" />
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Sidebar.handleClickOutside,
};

export default onClickOutside(Sidebar, clickOutsideConfig);
