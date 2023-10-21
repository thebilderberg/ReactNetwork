import React from 'react';
import style from "./filter.module.css";
import { Radio } from 'antd';

function Filter() {
	return (
		<div className={style.filterBox}>
			<Radio.Group>
				<Radio.Button value="large">Все</Radio.Button>
				<Radio.Button value="default">Повышение</Radio.Button>
				<Radio.Button value="small">ЗП больше $1000</Radio.Button>
			</Radio.Group>
		</div>
	);
}

export default Filter;