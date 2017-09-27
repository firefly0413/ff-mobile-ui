import React,{Component} from 'react'
import BScroll from 'better-scroll'

import '../styles/pages/betterScroll.scss'
const data = [
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

class BetterScroll extends Component{
    constructor(props){
        super(props);
        this.state = {
            upload:false
        }
        this.doUpload = this.doUpload.bind(this);
    }
    componentDidMount(){
        let _this = this;
        this.scroll = new BScroll('.wrapper',{
            scrollY:true,
            probeType: 1,
            pullUpLoad:{
                threshold: -50
            },
        })
        this.scroll.on('touchEnd',(pos)=>{
            if(pos.y<(this.scroll.maxScrollY-30)){
                console.log('加载')
                _this.doUpload();
            }
        })
    }
    doUpload(){
        this.setState({
            upload:true
        },this.addData)
    }
    addData(){
        let _this = this;
        for(let i=0;i<5;i++){
            data.push({title:'啦啦啦啦，德玛西亚'})
        }
        setTimeout(()=>{
            _this.setState({
                upload:false
            },()=>{
                _this.scroll.refresh();
            })
        },1000)
    }
    render(){
        const {upload} = this.state;
        console.log(upload);

        const text = this.state.upload?'数据加载中':'查看更多';
        return(
            <div className="myScroll">
                <div className="wrapper">
                    <div>
                        <ul className="scroll-list">
                            {
                                data.map((item,index)=>{
                                    return(
                                        <li key={index}>{item.title}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="upload-text">{text}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BetterScroll;