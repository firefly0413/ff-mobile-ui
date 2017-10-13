import React,{Component} from 'react'
import classnames from 'classnames'

class PanelFooter extends Component{

    render(){
        const {className,children} = this.props;
        const cls = classnames({
            'panel-footer-ui':true,
            [className]:!!className
        })
        return(
            <div className={cls}>
                {children}
            </div>
        )
    }
}

export default PanelFooter;