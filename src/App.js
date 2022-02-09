import './App.css';
import React from "react";
// import React, { Component } from "react";
import Header from "./Header/Header";
import Container from "./Container/Container";


const App = (props) => {
  return (
      <div className="app">
          <Header/>
          <Container states={props.states} addPost={props.addPost} addMessage={props.addMessage}/>
      </div>
  );
}


export default App;
