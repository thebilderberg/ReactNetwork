import React from 'react';
import style from './CreateDelListComp.module.css';
import { Input } from 'antd';
import { Button } from 'antd';

function CreateDelListComp() {
	return (
		<div className={style.CreateDelListComp}>
			<div>Добавьте нового сотрудника:</div>
			<div className={style.inputBox}>
				<Input placeholder="Имя" />
				<Input placeholder="ЗП" />
				<Button className={style.buttonClass} type="dashed">Добавить</Button>
			</div>
		</div>
	);
}

export default CreateDelListComp;