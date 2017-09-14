import React,{Component} from 'react'
import classnames from 'classnames'

class FInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            focus:false,
            value:props.value
        }
        this.doBlur = this.doBlur.bind(this);
    }
    render(){
        const {className,placeholder,type } = this.props;
        const {focus,value} = this.state;
        const cls = classnames({
            'fInput-ui':true,
            [className]:!!className
        })
        const clsIcon = classnames({
            'close-icon-ui':true,
            'close-icon-show':focus && value
        })
        return(
            <div className={cls} onClick={(e)=>{e.nativeEvent.stopImmediatePropagation();}}>
                <input type={type} value={value} placeholder={placeholder}
                       onFocus={()=>{this.handleFocus()}}
                       onChange={(e)=>{this.handleChange(e)}} />
                <div className={clsIcon} onClick={()=>{this.doClear()}}></div>
            </div>
        )
    }
    handleFocus(){
        this.setState({
            focus:true
        })
        window.document.addEventListener('click',this.doBlur);
    }
    doBlur(){
        const {value} = this.state;
        const {onBlur} = this.props;
        this.setState({
            focus:false
        },()=>{
            onBlur && onBlur(value);
        })

        this.removeEvt()
    }
    removeEvt(){
        window.document.removeEventListener('click',this.doBlur);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    doClear(){
        this.setState({
            value:''
        })
    }
}

FInput.defaultProps = {
    value:'',
    type:'text',
    placeholder:'',
    onBlur:()=>{},
}

export default FInput;