
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Cell from 'components/Cell'
import Switch from 'components/Switch'
import FInput from 'components/FInput'
import Checkbox from 'components/Checkbox'
import '../styles/pages/indexPage.scss'
import Tab from 'components/Tab'
import {Modal} from 'dragon-mobile-ui'
let img = require('../images/logo.jpg');

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			showModal:false
		}
	}
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

				<Tab activeIndex={0}>
					<Tab.Panel className='test' title='lemon tree' order='0'>123123123</Tab.Panel>
					<Tab.Panel title='haha' order='1'>asd23123</Tab.Panel>
					<Tab.Panel title='yellow river' order='2'>asdasd</Tab.Panel>
				</Tab>
				<button onClick={()=>{hashHistory.push('questions')}}>问卷</button>
				<button onClick={()=>{this.showModal()}}>显示模态框</button>

				<Modal visible={this.state.showModal}>
					<Modal.Header title="测试模态框"></Modal.Header>
					<Modal.Body>
						这里是内容区
					</Modal.Body>
					<Modal.Footer>
						<button >底部</button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
    showModal(){
		this.setState({
			showModal:true
		})
	}
}

export default Index;