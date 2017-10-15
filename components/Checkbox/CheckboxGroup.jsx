import React,{Component} from 'react'

class CheckboxGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            values:props.values
        }
    }
    render(){
        const {children} = this.props;
        const items = React.Children.map(children,(item,index)=>{
            return React.cloneElement(item,{
                key:index,
                onChange:()=>{this.handleChange(item.props.value)},
                checked:~this.state.values.indexOf(item.props.value)
            })
        })
        return(
            <div className="checkbox-group-ui">
                {items}
            </div>
        )
    }
    handleChange(value){
        let arr = this.state.values;
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

CheckboxGroup.defaultProps = {
    values:[],
    onChange:()=>{}
}

export default CheckboxGroup;