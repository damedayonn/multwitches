import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar.js';
import Main from './Main.js';
import Chat from './Chat.js';
import Stream from './Stream.js';

const AppRouter = ({onDark,setOnDark}) => {
    return (
        <Router>
            <Navbar onDark={onDark} setOnDark={setOnDark}/>
            <Routes>
                <Route exact path='/' element={<Main />}/>
                <Route exact path='/chats' element={<Chat />}/>
                <Route exact path='/streams' element={<Stream />}/>
            </Routes>
        </Router>
    )
};

export default AppRouter;