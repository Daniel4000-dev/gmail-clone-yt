import React from 'react';
import { Add, Inbox, Star, AccessTime, LabelImportant, NearMe, Note, ExpandMore } from '@mui/icons-material';
import { Person, Duo, Phone } from '@mui/icons-material';
import { Button, IconButton } from '@material-ui/core';
import './Sidebar.css';
import './SidebarOption.js';
import SidebarOption from './SidebarOption.js';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/counter/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
    
  return (
    <div className='sidebar'>
        <Button 
        startIcon={ <Add  fontSize='large'/>}
        className='sidebar__compose'
        onClick= {() => dispatch(openSendMessage())}
        >
            compose
        </Button>

        <SidebarOption 
        Icon={Inbox} 
        title='inbox' 
        number={54} 
        selected={true}
        />
        <SidebarOption Icon={Star} title='Starred' number={54} />
        <SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
        <SidebarOption Icon={LabelImportant} title='Important' number={54} />
        <SidebarOption Icon={NearMe} title='Sent' number={54} />
        <SidebarOption Icon={Note} title='Drafts' number={54} />
        <SidebarOption Icon={ExpandMore} title='More' number={54}/>

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Duo />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar