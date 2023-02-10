import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/counter/mailSlice';
import './Mail.css';

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsleft">
           <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
           </IconButton>

           <IconButton>
            <Error />
           </IconButton>

           <IconButton>
            <Delete />
           </IconButton>

           <IconButton>
            <Email />
           </IconButton>

           <IconButton>
            <WatchLater />
           </IconButton>

           <IconButton>
            <CheckCircle />
           </IconButton>

           <IconButton>
            <LabelImportant/>
           </IconButton>

           <IconButton>
            <MoreVert />
           </IconButton>
        </div>

        <div className="mail__toolsright">
          <IconButton>
            <UnfoldMore/>
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

           <IconButton>
            <ExitToApp />
          </IconButton>

           <IconButton>
            <ArrowBack />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.Subject}</h2>
          <LabelImportant className='mail__important' />
          <p>{selectedMail?.Title}</p>
          <p className='mail__time'>{selectedMail?.time}</p>
        </div>

        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail