import React,{Component} from 'react'
import classnames from 'classnames'

class TabPanel extends Component{
    render(){
        const {className,children,isActive} = this.props;
        const cls = classnames({
            [className]:!!className,
            'tab-panel':true,
            'active':isActive
        })
        return(
            <div className={cls}>
                {children}
            </div>
        )
    }
}

export default TabPanel;