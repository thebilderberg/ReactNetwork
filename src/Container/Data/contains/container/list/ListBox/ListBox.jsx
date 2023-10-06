import React from 'react';
import "./list-box.css";
import ListComponent from "../ListComponent/ListComponent.jsx"

function ListBox() {
	return (
		<div>
			<ListComponent/>
			<ListComponent/>
			<ListComponent/>
		</div>
	);
}

export default ListBox;