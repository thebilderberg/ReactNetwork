import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, statusZP} from "./Redux/States";
import {addMessage} from "./Redux/States";



export let rerenderThree = (states) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App states={states}
                     addPost={addPost}
                     addMessage={addMessage}
                     statusZP={statusZP}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
