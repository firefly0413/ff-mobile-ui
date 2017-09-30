import React,{Component} from 'react'
import BScroll from 'better-scroll'
import classnames from 'classnames'

class PullUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            upload:false,
        }
        this.doUpload = this.doUpload.bind(this);
    }
    componentDidMount(){
        this.scroll = new BScroll('.pullUp-wrapper-ui',{
            scrollY:true,
            probeType: 1
        })
        this.scroll.on('touchEnd',(pos)=>{
            if(pos.y<(this.scroll.maxScrollY-30)){
                this.doUpload();
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
        let {uploadFn} = this.props;
        new Promise(function(resolve){
            setTimeout(function(){
                uploadFn();
                _this.scroll.refresh();
                resolve();
            },1000)
        }).then(function(){
            _this.setState({
                upload:false
            })
        })

    }
    render(){
        const {className,children} = this.props;
        const text = this.state.upload?'数据加载中...':'查看更多';
        const cls = classnames({
            "pullUp-ui":true,
            [className]:!!className
        })
        return(
            <div className={cls}>
                <div className="pullUp-wrapper-ui">
                    <div>
                        {children}
                        <div className="upload-text">{text}</div>
                    </div>
                </div>
            </div>
        )
    }
}
PullUp.defaultProps = {
    uploadFn:()=>{}
}

export default PullUp;