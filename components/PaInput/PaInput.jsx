import React,{Component} from 'react'
import classnames from 'classnames'

class PaInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            focus:false,
            value:props.value,
            validate:{
                status:true,
                warnMsg:`请输入${props.title}`
            },
        }
        this.doBlur = this.doBlur.bind(this);
    }
    componentDidMount(){

    }
    render(){
        const {disable,title,name} = this.props;
        const {value,validate} = this.state;
        const cls = classnames({
            'PaInput-wrap':true,
            'wrong':validate.status?false:true
        });
        const clsTitle = classnames({
            'PaInput-title':true,
            'PaInput-title-up':(this.state.focus||this.state.value)?true:false
        });
        const clsWarn = classnames({
            'PaInput-warn':true,
            'show':validate.status?false:true
        })
        const clsIcon = classnames({
            'input-right-icon':true,
            'clear':(this.state.focus && this.state.value)?true:false,
            'warn':validate.status?false:true
        })
        return(
            <div className="PaInput-ui" onClick={(e)=>{e.nativeEvent.stopImmediatePropagation();}}>
                <div className={cls}>
                    <div className={clsTitle} onClick={()=>{this.doFocus()}}>{title}</div>
                    <input type="text" ref="myInput" name={name} value={value}
                       onFocus={()=>{this.handleFocus()}}
                       onChange={this.handleChange.bind(this)}
                    />
                    <div className={clsWarn}>{validate.warnMsg}</div>
                    <div className={clsIcon} onClick={()=>{this.doClear()}}></div>
                </div>
            </div>
        )
    }
    doClear(){
        this.setState({
            value:''
        })
    }
    doFocus(){
        this.refs.myInput.focus();
    }
    handleFocus(){
        this.setState({
            focus:true,
            validate:{...this.state.validate,status:true}
        })
        window.document.addEventListener('click',this.doBlur);
    }
    doBlur(){
        const {value} = this.state;
        const {title,onBlur,regExp,required,warnMsg} = this.props;

        if(required && !value){
            this.setState({
                validate:{status:false,warnMsg:`请输入${title}`}
            })
            this.removeEvt();
            return;
        }

        let result = !value?true:regExp.test(value);
        if(!result){
            this.setState({
                validate:{status:false,warnMsg:warnMsg}
            });
            this.removeEvt();
            return;
        }
        this.setState({
            focus:false
        },()=>{
            onBlur(value);
        })

        this.removeEvt()
    }
    removeEvt(){
        window.document.removeEventListener('click',this.doBlur);
    }

    handleChange(e){
        const {onChange} = this.props;
        let curValue = e.target.value;
        this.setState({
            value:curValue
        },()=>{
            onChange(curValue)
        });
    }
}

PaInput.defaultProps = {
    regExp:/./,
    onChange:()=>{},
    onBlur:()=>{},
    value:'',
    title:'',
    name:'',
    required:false
}

export default PaInput;