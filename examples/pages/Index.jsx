
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Cell from 'components/Cell'
import Switch from 'components/Switch'
import FInput from 'components/FInput'
import Checkbox from 'components/Checkbox'
import '../styles/pages/indexPage.scss'
import CheckboxGroup from "components/Checkbox/CheckboxGroup";
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
				<div className="norm_block"/>
				<Checkbox >haha</Checkbox>
				<div className="norm_block"/>
				<Checkbox.Group values={['a','b']} onChange={(result)=>{console.log('checkbox结果是==>',result)}}>
					<Checkbox value="a">haha</Checkbox>
					<Checkbox value="b">lala</Checkbox>
					<Checkbox value="c">shahsa</Checkbox>
				</Checkbox.Group>
			</div>
		);
	}
}

export default Index;