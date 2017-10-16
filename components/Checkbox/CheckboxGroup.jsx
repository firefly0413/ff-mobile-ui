import React,{Component} from 'react'
import Cell from '../Cell'

class CheckboxGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            values:props.values
        }
    }
    render(){
        const {type,children} = this.props;
        const items = React.Children.map(children,(item,index)=>{
            return React.cloneElement(item,{
                type,
                key:index,
                onChange:()=>{this.handleChange(item.props.value)},
                checked:~this.state.values.indexOf(item.props.value)
            })
        })
        return(
            <div className="checkbox-group-ui">
                {type==='cell'?<Cell.Group>{items}</Cell.Group>:items}
            </div>
        )
    }
    handleChange(value){
        let _this = this;
        let arr = Array.prototype.slice.call(_this.state.values,0)
        let index = arr.indexOf(value);
        if(index<0){
            arr.push(value);
        }else{
            arr.splice(index,1)
        }

        this.setState({
            values:arr
        })
        this.props.onChange(arr);
    }
}

CheckboxGroup.prototypes = {
    values:React.PropTypes.array
}

CheckboxGroup.defaultProps = {
    values:[],
    onChange:()=>{}
}

export default CheckboxGroup;