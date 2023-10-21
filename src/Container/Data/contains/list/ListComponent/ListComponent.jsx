import React from 'react';
import style from "./list-component.module.css";
import userImg from "./user.png";
import { DeleteOutlined, DollarOutlined } from '@ant-design/icons';


function ListComponent(props) {

	let classes = style.listProfileComponent;

	// let idUser = props.id;
	// function updateZP(id){
	// 	props.statusZP(id);
	// }


	if (props.status) {
		classes = style.active;
	}

	return (
		<div className={classes}>
			<div><img className={style.ImgUser} src={userImg} alt="xxx"/></div>
			<div>{props.name}</div>
			<div>{props.zp}</div>
			<DollarOutlined className={classes}/>
			<DeleteOutlined />
		</div>
	);
}

export default ListComponent;