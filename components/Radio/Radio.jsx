import React,{PureComponent} from 'react'
import Cell from '../Cell'
import classnames from 'classnames'

class Radio extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            checked:props.checked
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({
                checked:nextProps.checked
            })
        }
    }
    render(){
        const {type} = this.props;

        if(type==='cell'){
            return (
                <Cell onClick={()=>{this.handleChange()}}>
                    {this.renderContent()}
                </Cell>
            )
        }
        return this.renderContent()
    }
    renderContent(){
        const {checked} = this.state;
        const {disabled,type,className,children} = this.props;
        const labelCls = classnames({
            'disabled':disabled
        })
        const cls = classnames({
            'radio-ui':true,
            'checked':!!checked,
            [className]:!!className
        })
        return(
            <label className={labelCls} onClick={type==='cell'?null:()=>{this.handleChange()}} >
                <span className={cls}>
                    <span className="radio-inner-ui"/>
                </span>
                {children}
            </label>
        )
    }
    handleChange(){
        const {checked} = this.state;
        const {onChange,disabled} = this.props;
        if(disabled || checked) return;
        this.setState({
            checked:true
        },()=>{
            onChange(true)
        })
    }
}

Radio.defaultProps = {
    checked:false,
    disabled:false,
    onChange:()=>{}
}

export default Radio;