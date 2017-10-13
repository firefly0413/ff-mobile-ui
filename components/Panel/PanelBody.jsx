import React,{Component} from 'react'
import classnames from 'classnames'

class PanelBody extends Component{

    render(){
        const {className,children} = this.props;
        const cls = classnames({
            'panel-body-ui':true,
            [className]:!!className
        })
        return(
            <div className={cls}>
                {children}
            </div>
        )
    }
}

export default PanelBody;