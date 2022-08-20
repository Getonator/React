import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Nevbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Communities from "./components/Communities/Communities";
import Friends from "./components/Friends/Friends";
import Games from "./components/Games/Games";
import Music from "./components/Music/Music";
import News from "./components/News/News";


const App = (props) => {




    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/* <Profile/> */}
            <div class='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element= { <Profile posts = {props.posts} />} />
                    <Route path="/dialogs" element={<Dialogs dialogs = {props.dialogs}  messages = {props.messages}/>}/>
                    <Route path="/communities" element={<Communities/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News />}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>);

}

export default App;
