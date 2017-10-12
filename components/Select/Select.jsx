import React,{Component} from 'react'
import List from './List'
import classnames from 'classnames'

class Select extends Component{
    constructor(props){
        super(props);
        this.state = {
            status:props.status||false,
            activeItem:{
                text:'请选择'
            }
        }
    }
    render(){
        const {data,search} = this.props;
        return(
            <div className="select-ui">
                {this.renderHeader()}
                <List data={data} search={search} visible={this.state.status} onChange={(index,data)=>{this.handleListClick(index,data)}}/>
            </div>
        )
    }
    renderHeader(){
        const {status,activeItem} = this.state;
        const cls = classnames({
            'select-header-ui':true,
            'select-header-active-ui':status
        })
        return (
            <div className={cls} onClick={()=>{this.handleHeaderClick()}}>{activeItem.text}</div>
        )
    }
    handleHeaderClick(){
        const {status} = this.state;
        this.setState({
            status:!status
        },()=>{
            this.props.onChange()
        })
    }
    handleListClick(index,data){
        console.log(data);
        this.setState({
            status:false,
            activeItem:data[index]
        })
    }
}

Select.defaultProps = {
    data:null,
    search:false,
    onChange:()=>{}
}
Select.propTypes = {

}

export default Select;