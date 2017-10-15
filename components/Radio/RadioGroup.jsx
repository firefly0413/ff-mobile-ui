import React,{PureComponent} from 'react'
import Cell from '../Cell'

class RadioGroup extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            value:props.value
        }
    }
    render(){
        const {type,children} = this.props;
        const items = React.Children.map(children,(item,index)=>{
            return React.cloneElement(item,{
                type,
                key:index,
                checked:item.props.value === this.state.value,
                onChange:()=>{this.handleChange(item.props.value)}
            })
        })
        return(
            <div className="radio-group-ui">
                {type==='cell'?<Cell.Group>{items}</Cell.Group>:items}
            </div>
        )
    }
    handleChange(value){
        if(!value) return;
        this.setState({
            value:value
        })
    }
}

RadioGroup.defaultProps = {
    value:''
}

export default RadioGroup;