import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'

class Cell extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {type,title} = this.props;
        const cls = classnames({
            'cell-ui':true,
            'cell-link-ui':type==='link'
        })
        return(
            <div className={cls}>
                <div className="cell-main">
                    <div className="cell-title">{title}</div>
                    <div className="cell-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Cell.defaultProps = {
    type:'',
    title:''
};

export default Cell;