import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import './Header.js'
import './Sidebar.js';
import Mail from './Mail';
import './EmailRow.js'
import EmailList from './EmailList'
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import SendMail from './SendMail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice'; 

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">
        <Header/>

        <div className="app__body">
          <Sidebar />

          <Routes>
             <Route path='/' element={<EmailList/>} />
             <Route path='/mail' element={<Mail/>} />
          </Routes>
        </div>
        {sendMessageIsOpen &&  <SendMail />}
      </div>
    </Router>
  );
}

export default App;
