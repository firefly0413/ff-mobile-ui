
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Cell from '../../components/Cell'
import '../styles/pages/indexPage.scss'
let img = require('../images/logo.jpg');

class Index extends Component {
	render() {
		return (
			<div className="index-page">
				<div className="logo" onClick={()=>{hashHistory.push('test')}}>
					<img src={img} />
				</div>
				<div className="content">
					<Cell title="Cell" type="link"/>
					<Cell title="Test" type="text" value="测试"/>
				</div>
			</div>
		);
	}
}

export default Index;