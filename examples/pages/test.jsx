
import React, { Component } from 'react';
import PaInput from '../../components/PaInput'
class Test extends Component {
	
	render() {
		return (
			<div className="index-page">
				测试页面,test
				<div style={{height:'40px'}}></div>
				<PaInput title="input测试" regExp={/^\d+$/} warnMsg="请输入数字" required={false} value="aaa"/>
			</div>
		);
	}
}

export default Test;