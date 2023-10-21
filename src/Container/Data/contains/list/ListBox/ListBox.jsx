import React from 'react';
import ListComponent from "../ListComponent/ListComponent.jsx";
import style from "./list-box.module.css";
import { Divider, List, Typography } from 'antd';

function ListBox({dataCalc}) {


	let ListComp = dataCalc.dataCalcObj.map((obj) =>
		<ListComponent name={obj.name}
					   zp={obj.zp}
					   status={obj.status}
					   id={obj.id}/>);

	return (
		<div className={style.listBox}>
			<Divider orientation="left"></Divider>
			<List
				// bordered
				dataSource={ListComp}
				renderItem={(item) => (
					<List.Item>
						<Typography.Text mark></Typography.Text> {item}
					</List.Item>
				)}
			/>
		</div>
	);
}

export default ListBox;