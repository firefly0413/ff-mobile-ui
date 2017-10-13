import React,{Component} from 'react'
import classnames from 'classnames'

class Panel extends Component{

    render(){
        const {className,children} = this.props;
        const cls = classnames({
            'panel-ui':true,
            [className]:!!className
        })
        return(
            <div className={cls}>
                {children}
            </div>
        )
    }
}

export default Panel;