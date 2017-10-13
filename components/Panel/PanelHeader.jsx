import React,{Component} from 'react'
import classnames from 'classnames'

class PanelHeader extends Component{

    render(){
        const {className,title} = this.props;
        const cls = classnames({
            'panel-header-ui':true,
            [className]:!!className
        })
        return(
            <div className={cls}>
                <div className="panel-title-ui">{title}</div>
            </div>
        )
    }
}

PanelHeader.defaultProps = {
    title:''
}

export default PanelHeader;