import React from 'react';
import "./head.css";
import { Typography } from 'antd';

const { Title } = Typography;

function Head() {
	return (
		<div className="header">
			<Title level={2}>Учет сотрудников</Title>
			<Title level={3}>Общее число:</Title>
			<Title level={3}>Премию получат:</Title>
		</div>
	);
}

export default Head;