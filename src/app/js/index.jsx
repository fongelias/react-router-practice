import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const App = () => (
	<Router>
		<div>
			<h1>Hello World</h1>
			<Link to='/first'>First</Link>
			<Link to='/second'>Second</Link>
			<Link to='/third'>Third</Link>
			<div>
				<Route path='/first' component={() => (<p>first</p>)}/>
				<Route path='/second' component={() => (<p>second</p>)}/>
				<Route path='/third' component={() => (<p>third</p>)}/>
			</div>
		</div>
	</Router>
);




ReactDOM.render(<App />, document.getElementById("root"))




