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
    componentDidMount(){
        let scroll = new BScroll('.wrapper',{
            scrollY:true,
            pullUpLoad:{
                threshold:50
            }
        })
    }
    render(){
        return(
            <div className="myScroll">
                <div className="wrapper">
                    <ul className="scroll-list">
                        {
                            data.map((item,index)=>{
                                return(
                                    <li key={index}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default BetterScroll;