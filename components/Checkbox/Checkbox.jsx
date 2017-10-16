import React,{Component} from 'react'
import Cell from '../Cell'
import classnames from 'classnames'

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:props.checked,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && (nextProps.checked!==this.state.checked)){
            this.setState({
                checked:nextProps.checked
            })
        }
    }
    render(){
        const {type} = this.props;
        if(type === 'cell'){
            return (
                <Cell onClick={()=>{this.handleChange()}}>
                    {this.renderCheckbox()}
                </Cell>
            )
        }
        return this.renderCheckbox()
    }
    renderCheckbox(){
        const {checked} = this.state;
        const {disabled,type,className,children} = this.props;
        const labelCls = classnames({
            'disabled':disabled
        })
        const cls = classnames({
            'checkbox-ui':true,
            'checked':!!checked,
            [className]:!!className
        })
        return(
            <label className={labelCls} onClick={type==='cell'?null:()=>{this.handleChange()}} >
                <span className={cls}>
                    <span className="checkbox-inner-ui"/>
                </span>
                {children}
            </label>
        )
    }
    handleChange(){
        const {checked} = this.state;
        const {onChange,disabled} = this.props;
        if(disabled) return;
        this.setState({
            checked:!checked
        },()=>{
            onChange(!checked)
        })
    }
}

Checkbox.defaultProps = {
    type:'',
    checked:false,
    disabled:false,
    onChange:()=>{}
}

export default Checkbox;