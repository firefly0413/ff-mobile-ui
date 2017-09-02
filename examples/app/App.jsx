import React ,{Component,PropTypes} from 'react'

import '../../styles/index'
import './app.scss'
class App extends Component{
	
	render(){
		return(
			<div>
				<h1>hello world!!!</h1>
				<div className="app-container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;