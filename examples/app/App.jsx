import React ,{Component,PropTypes} from 'react'
import Header from './Header'
import '../../styles/index'
import './app.scss'
class App extends Component{
	
	render(){
		return(
			<div>
				<Header/>
				<div className="app-container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;