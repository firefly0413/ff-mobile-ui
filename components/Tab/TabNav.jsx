import React,{Component} from 'react'
import classnames from 'classnames'

class TabNav extends Component{
    render(){
        
        return(
            <div className='tab-nav'>
                {this.renderNav()}
            </div>
        )
    }
    renderNav(){
        const {panels,activeIndex,onChange} = this.props;
        return React.Children.map(panels,(item,index)=>{
            let order = parseInt(item.props.order);
            const cls = classnames({
                'active':order===activeIndex
            })
            return(
                <li className={cls} key={index} onClick={()=>{onChange(order)}}>
                    {item.props.title}
                </li>
            )
        })
    }
}

export default TabNav;