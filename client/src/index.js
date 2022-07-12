import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Chat from './Chat/Chat';
import AddVideo from './AddVideo/AddVideo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Home/>}>Home</Route>
    <Route path='/Dashboard' element={<Dashboard/>}>About</Route>
    <Route path='/Login' element={<Login/>}>Login</Route>
    <Route path='/Chat' element={<Chat/>}>Chat</Route>
    <Route path='/AddVideo' element={<AddVideo/>}>AddVideo</Route>
    <Route path='/VideoPlayer/:ID' element={<VideoPlayer />} />
 </Routes>
 </BrowserRouter>
);
