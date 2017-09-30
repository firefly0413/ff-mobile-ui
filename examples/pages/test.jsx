
import React, { Component } from 'react';
import PaInput from '../../components/PaInput'
import PullUp from '../../components/PullUp'
import '../styles/pages/test'

const initData = [
    {title:'oil快结婚快结婚了健康'},
    {title:'看见；立即会考虑好看了'},
    {title:'按时开放家里看不开机构'},
    {title:'爱上覅hi户口了你们那边'},
    {title:'立刻就不放V领好斯蒂芬'},
    {title:'爱上覅hi户口了你们那边'},
    {title:'不喝酒的人后三年'},
    {title:'oil快结婚快结婚了健康'},
    {title:'提升空间都不算加班费'},
    {title:'不少地方上来看你减肥快结束'},
    {title:'看见；立即会考虑好看了'},
    {title:'oil快结婚快结婚了健康'},
    {title:'看见；立即会考虑好看了'},
    {title:'oil快结婚快结婚了健康'},
    {title:'流失的风景哦快乐就好'},
]

class Test extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:initData
		}
	}
	render() {
		const {data} = this.state;
		return (
			<div className="index-page">
				测试页面,test
				<div style={{height:'40px'}}></div>
				<PaInput title="input测试" regExp={/^\d+$/} warnMsg="请输入数字" required={false} value="aaa"/>
				<PullUp className="testScroll" uploadFn={this.doUpload.bind(this)}>
					<ul className="scroll-list">
                        {
                            data.map((item,index)=>{
                                return(
									<li key={index}>{item.title}</li>
                                )
                            })
                        }
					</ul>
				</PullUp>
			</div>
		);
	}
    doUpload(){
		let _this = this;
		for(var i=0;i<5;i++){
			initData.push({title:'德玛西亚'})
		}
		_this.setState({
			data:initData
		})
	}
}

export default Test;