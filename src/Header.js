import React from 'react';
import './Header.css';
import { Menu, Search, ArrowDropDown, Apps, Notifications } from '@mui/icons-material';

import { Avatar, IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <Menu />
            </IconButton>
            <img
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImVn-QF6n87yHJa3JnwtaxOKwd4nJm-z17Q&usqp=CAU' 
             alt=''
            />
        </div>
        <div className="header__middle">
          <Search />
          <input placeholder='Search mail' type="text" />
          <ArrowDropDown />
        </div>
        <div className="header__right">
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar />
        </div>
    </div>
  )
}

export default Header