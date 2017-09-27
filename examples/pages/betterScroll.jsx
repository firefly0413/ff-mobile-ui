import React,{Component} from 'react'
import BScroll from 'better-scroll'
import classnames from 'classnames'
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
            upload:false,
            pullDown:false,
            pageSize:10
        }
        this.doUpload = this.doUpload.bind(this);
    }
    componentDidMount(){
        this.scroll = new BScroll('.wrapper',{
            scrollY:true,
            probeType: 1
        })
        this.scroll.on('touchEnd',(pos)=>{
            if(pos.y<(this.scroll.maxScrollY-30)){
                console.log('加载')
                this.doUpload();
            }
            if(pos.y>50){
                console.log('刷新')
                this.doRefresh();
            }
        })
    }
    doRefresh(){
        this.setState({
            pullDown:true
        },this.refreshData)
    }
    doUpload(){
        this.setState({
            upload:true
        },this.addData)
    }
    refreshData(){
        let _this = this;
        setTimeout(()=>{
            this.setState({
                pullDown:false
            })
        },1000)
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
                //this.scroll.scrollBy(10,100,500);
            })
        },1000)
    }
    render(){

        const text = this.state.upload?'数据加载中...':'查看更多';
        const pullDown = this.state.pullDown?'正在刷新...':'下拉刷新';
        const cls = classnames({
            "pull-down":true,
            "show":this.state.pullDown
        })
        return(
            <div className="myScroll">
                <div className="wrapper">
                    <div>
                        <div className={cls}>{pullDown}</div>
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