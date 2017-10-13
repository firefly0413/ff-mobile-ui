import React,{Component} from 'react'

class CellGroup extends Component{
    render(){
        return(
            <div className="cell-group-ui">
                {this.props.children}
            </div>
        )
    }
}

export default CellGroup;