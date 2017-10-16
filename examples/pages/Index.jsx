
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Cell from 'components/Cell'
import Header from '../components/Header'
import Panel from 'components/Panel'
import '../styles/pages/indexPage.scss'

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div className="index-page">
				<Header>
					<div className="brand">
						<h2>MOBILE UI</h2>
						<p>基于react的移动端组件库</p>
					</div>
				</Header>

				<div className="main">
					<Panel>
						<Panel.Header title="表单组件"/>
						<Panel.Body>
							<Cell.Group>
								<Cell.Link title="复选框 Checkbox" linkUrl='checkboxPage'/>
								<Cell.Link title="单选框 Radio" linkUrl='radioPage'/>
								<Cell.Link title="文本框 Input" linkUrl='inputPage'/>
							</Cell.Group>
						</Panel.Body>
					</Panel>

				</div>
			</div>
		);
	}
}

export default Index;