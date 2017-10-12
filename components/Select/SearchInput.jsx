import React,{Component} from 'react'

class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    render(){
        return(
            <div className="SearchInput-ui">
                <input  type="text" value={this.state.value} placeholder="do search..." onChange={(e)=>{this.handleChange(e)}}/>
            </div>
        )
    }
    handleChange(e){
        let value = e.target.value;
        this.setState({
            value:value
        },()=>{
            this.props.onChange(value)
        })
    }
}

export default SearchInput;