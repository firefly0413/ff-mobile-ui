
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import '../styles/pages/indexPage.scss'
let img = require('../images/logo.jpg');

class Index extends Component {
	
	render() {
		return (
			<div className="index-page">
				<div className="logo" onClick={()=>{hashHistory.push('test')}}>
					<img src={img} />
				</div>
				lalala,haha
			</div>
		);
	}
}

export default Index;