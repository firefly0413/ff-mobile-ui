import React,{Component} from 'react'
import classnames from 'classnames'

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:props.checked,
        }
    }
    render(){
        const {checked} = this.state;
        const {disabled,className,children} = this.props;
        const labelCls = classnames({
            'disabled':disabled
        })
        const cls = classnames({
            'checkbox-ui':true,
            'checked':!!checked,
            [className]:!!className
        })
        return(
            <label className={labelCls} onClick={()=>{this.handleChange()}} >
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
    checked:false,
    disabled:false,
    onChange:()=>{}
}

export default Checkbox;