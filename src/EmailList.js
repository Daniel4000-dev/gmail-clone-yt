import { Checkbox, IconButton } from '@material-ui/core';
import
 { 
  ArrowDropDown, Redo, MoreVert, ChevronLeft, ChevronRight, 
  KeyboardHide, Settings, Inbox, LocalOffer, People 
} from '@mui/icons-material';
import { React, useEffect, useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import './Section';
import Section from './Section';
import { db } from './firebase';
import { collection,onSnapshot, getDocs, Timestamp } from 'firebase/firestore';

function EmailList() {

  const [emails, setEmails] = useState([]);
  const timestamp = new Timestamp();
  useEffect(() => { 
    onSnapshot(collection(db, 'email'), (snapshot) =>
    setEmails(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))))
    // const fetchMail = async () => {
    //   const colRef = await getDocs(collection(db, 'email'));
    //   setEmails(colRef.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log(colRef)
    // };
    // fetchMail();
  }, []);
 
  return (
    <div className='emailList'>
      <div className='emailList__settings' >
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton> 
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title='Primary' color='red' selected />
        <Section Icon={People} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>

      <div className="emailList__list">

      {emails && emails.map((data) => ( 
          <EmailRow
          id={data.id}
          key={data.id}
          title={data.to}
          subject={data.subject}
          description={data.message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
          
          />
        ))}

        <EmailRow 
        title='Twitch'
        subject='Hey fellow writer'
        description='This is a test'
        time='10pm'
        />
        <EmailRow 
        title='Twitch'
        subject='Hey fellow writer'
        description='This is Dope'
        time='10pm'
        />
      </div>
    </div>
  )
}

export default EmailList