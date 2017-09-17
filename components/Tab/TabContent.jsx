import React,{Component} from 'react'
import classnames from 'classnames'

class TabContent extends Component{
    render(){
        return(
            <div className="tab-content">
                {this.renderContent()}
            </div>
        )
    }
    renderContent(){
        const {panels,activeIndex} = this.props;
        return React.Children.map(panels,(item)=>{
            const order = parseInt(item.props.order);
            const isActive = activeIndex===order;
            return React.cloneElement(item,{
                key:order,
                isActive,
                children:item.props.children
            })
        })
    }
}

export default TabContent;