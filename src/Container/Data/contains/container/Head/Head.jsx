import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./head.css";

function Head() {
	return (
		<div className="header">
			<h1>Учет сотрудников</h1>
			<h2>Общее число:</h2>
			<h2>Премию получат:</h2>
		</div>
	);
}

export default Head;