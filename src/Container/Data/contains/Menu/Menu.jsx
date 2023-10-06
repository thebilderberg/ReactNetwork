import React, { Component } from 'react';
import "./menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Menu() {
  return (
      <div className="menu-bar">
        <div className="box-for-buttons">
            <Button variant="outline-dark">Stat</Button>
            <Button variant="outline-dark">Profile</Button>
            <Button variant="outline-dark">Chat</Button>
            <Button variant="outline-dark">UserRoob</Button>
            <Button variant="outline-dark">Settings</Button>
        </div>
      </div>
    );
}

export default Menu;