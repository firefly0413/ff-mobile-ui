import React,{Component} from 'react'
import classnames from 'classnames'
import TabNav from './TabNav'
import TabContent from './TabContent'

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex:props.activeIndex
        }
    }
    render(){
        const {className} = this.props;
        const cls = classnames({
            [className]:!!className,
            'tab-wrap':true
        })
        return(
            <div className={cls}>
                {this.renderHeader()}
                {this.renderContent()}
            </div>
        )
    }
    renderContent(){
        const {children} = this.props;
        return (
            <TabContent panels={children} activeIndex={this.state.activeIndex} />
        )
    }
    renderHeader(){
        const {children,onChange} = this.props;
        const {activeIndex} = this.state;
        return(
            <TabNav activeIndex={activeIndex} panels={children} onChange={(order)=>{this.handleChange(order)}} />
        )
    }
    handleChange(order){
        this.setState({
            activeIndex:order
        })
    }
}

export default Tab;