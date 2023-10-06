import React, { Component } from 'react';
import "./header.css";
import Alert from 'react-bootstrap/Alert';

function Header() {
	return (
		<div className="header-bar">
			{['primary','dark',].map((variant) => (
		        <Alert key={variant} variant={variant}>
		        	This is a {variant} alert—check it out!
		        </Alert>
		    ))}
		</div>
	);
}

export default Header;