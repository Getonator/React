import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import message from "./components/Dialogs/Messages/Message";

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
    {id:1, post:'Hi, how are you?', laikCkaun:5467 },
    {id:2, post:'It s my first post', laikCkaun:23},
    {id:3, post:'Dadadada', laikCkaun:368},
    {id:4, post:'Rarara', laikCkaun:983}
]

let dialogs = [
    {id:1, name:'Alexandr'},
    {id:2, name:'Andrey'},
    {id:3, name:'Dmitriy'},
    {id:4, name:'Stanislav'},
    {id:5, name:'Victoria'},
    {id:6, name:'Irina'},
]

let messages = [
    {id:1 ,messages:"Привет" },
    {id:2 ,messages:"прив " },
    {id:3 ,messages:"хелло" },
    {id:4 ,messages:"хай" },
]

root.render(
    <React.StrictMode>
        <App posts = {posts} dialogs = {dialogs} messeges = {messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
