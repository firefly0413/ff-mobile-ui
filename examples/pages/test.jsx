
import React, { Component } from 'react';
import PaInput from '../../components/PaInput'
import PullUp from '../../components/PullUp'
import Select from '../../components/Select'
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

const listData = [
    {ping:'beijing',text:'北京'},
    {ping:'shanghai',text:'上海'},
    {ping:'guangzhou',text:'广州'},
    {ping:'shenzhen',text:'深圳'},
    {ping:'nanjing',text:'南京'},
    {ping:'hangzhou',text:'杭州'},
    {ping:'wuhan',text:'武汉'},
    {ping:'hefei',text:'合肥'},
    {ping:'xiamen',text:'厦门'},
    {ping:'chengdu',text:'成都'},
    {ping:'nanchang',text:'南昌'},
    {ping:'hulunbeier',text:'呼伦贝尔'},
    {ping:'wulumuqi',text:'乌鲁木齐'},
    {ping:'lasa',text:'拉萨'},
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
				{/*<PullUp className="testScroll" uploadFn={this.doUpload.bind(this)}>*/}
					{/*<ul className="scroll-list">*/}
                        {/*{*/}
                            {/*data.map((item,index)=>{*/}
                                {/*return(*/}
									{/*<li key={index}>{item.title}</li>*/}
                                {/*)*/}
                            {/*})*/}
                        {/*}*/}
					{/*</ul>*/}
				{/*</PullUp>*/}
				<div className="normBlock" />
				<Select data={listData} search/>
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