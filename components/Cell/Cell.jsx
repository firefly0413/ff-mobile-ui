import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'

class Cell extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {title} = this.props;
		return(
			<div className="cell-wrap">
				<div className="cell-main">
					<div className="cell-title">{title}</div>
					{this.renderContent()}
				</div>
			</div>
		)
	}
	renderContent(){
		let {type,name,defaultVavlue,value,onChange} = this.props;
		value = value?value:defaultVavlue;
		switch(type){
			case 'text':
				return <div className="cell-text">{value}</div>;
			case 'input':
				return (
					<div className="cell-input">
						<input type="input" name={name} value={value} onChange={(e)=>{onChange(e.target.value)}} />
					</div>
				);
			case 'link':
				return(
					<div className="cell-text cell-link">{value}</div>
				);
			default:
				return <div className="cell-text">{value}</div>;
		}
	}
}

Cell.defaultProps = {
	type:'text',
	name:'',
	defaultValue:'',
	onChange:()=>{}
};

export default Cell;