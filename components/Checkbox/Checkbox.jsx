import React,{Component} from 'react'
import classnames from 'classnames'

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:props.checked||false
        }
    }
    render(){
        const {checked} = this.state;
        const {className,children} = this.props;
        const cls = classnames({
            'checkbox-ui':true,
            'checked':!!checked,
            [className]:!!className
        })
        return(
            <label onClick={()=>{this.handleChange()}} >
                <span className={cls}>
                    <span className="checkbox-inner-ui"/>
                </span>
                {children}
            </label>
        )
    }
    handleChange(){
        const {checked} = this.state;
        const {onChange} = this.props;
        this.setState({
            checked:!checked
        },()=>{
            onChange(!checked)
        })
    }
}

Checkbox.defaultProps = {
    checked:false,
    onChange:()=>{}
}

export default Checkbox;