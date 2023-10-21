import React from 'react';
import style from './search.module.css';
import { Input, Tooltip} from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

function Search() {
	return (
		<div className={style.inputBox}>
			<Input
				placeholder="Введите имя сотрудника"
				prefix={<UserOutlined className="site-form-item-icon" />}
				suffix={
					<Tooltip title="Также можно искать по зарплате">
						<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
					</Tooltip>
				}
				className={style.InputClass}
			/>
		</div>
	);
}

export default Search;