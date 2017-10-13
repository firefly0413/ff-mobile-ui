import React,{Component} from 'react'
import classnames from 'classnames'

class Cell extends Component{
    constructor(props){
        super(props);
        const {className} = this.props;
        this.cls = classnames({
            'cell-ui':true,
            [className]:!!className
        })
    }
    render(){
        const {title} = this.props;
        return(
            <div className={this.cls} onClick={()=>{this.handleClick()}}>
                <div className="cell-main">
                    <div className="cell-title">{title}</div>
                    <div className="cell-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
    handleClick(){
        const {onClick} = this.props;
        onClick();
    }
}

Cell.defaultProps = {
    title:'',
    onClick:()=>{}
};

export default Cell;