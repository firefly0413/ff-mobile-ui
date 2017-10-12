import React ,{Component} from 'react'
import Header from './Header'
import Events from '../util/events'
import '../../styles/index'
import './app.scss'
import 'dragon-mobile-ui/styles/index.scss'
class App extends Component{
	componentDidMount(){
        Events.on(window,'resize',window.__setFontSize__);
	}
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