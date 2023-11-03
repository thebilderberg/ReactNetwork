import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./filter.css";

function Filter() {
	return (
		<div>
			<ButtonGroup aria-label="Basic example">
		   		<Button variant="secondary" className="button">Все сотрудники</Button>
		      	<Button variant="secondary" className="button">На повышение</Button>
		    	<Button variant="secondary" className="button">ЗП выше 1000$</Button>
		    </ButtonGroup>
		</div>
	);
}

export default Filter;