import React,{Component} from 'react'
import classnames from 'classnames'

class Switch extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:props.active
        }
    }
    render(){
        let cls = classnames({
            'switch-ui':true,
            'active':this.state.active
        })
        let clsBall = classnames({
            'switch-ball':true,
            'active':this.state.active
        })
        return(
            <div className={cls} onClick={()=>{this.doSwitch()}}>
                <div className={clsBall}></div>
            </div>
        )
    }
    doSwitch(){
        let {onChange} = this.props;
        this.setState({
            active:!this.state.active
        },()=>{
            onChange(this.state.active);
        })
    }
}

Switch.defaultProps = {
    active:false,
    onChange:()=>{}
}

export default Switch;