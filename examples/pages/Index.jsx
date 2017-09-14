
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Cell from '../../components/Cell'
import Switch from '../../components/Switch'
import FInput from '../../components/FInput'
import '../styles/pages/indexPage.scss'
let img = require('../images/logo.jpg');

class Index extends Component {
	render() {
		return (
			<div className="index-page">
				<div className="logo" onClick={()=>{hashHistory.push('test')}}>
					<img src={img} />
				</div>

				<div className="norm_block"/>
				<Cell title="Cell" >
					<Switch className="mySwitch" onChange={(status)=>{console.log(status);}}/>
				</Cell>
				<div className="norm_block"/>
				<Cell title="input" >
					<FInput type="text" placeholder="随便输入点什么"/>
				</Cell>
			</div>
		);
	}
}

export default Index;