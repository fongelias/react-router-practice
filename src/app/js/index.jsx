import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const App = () => (
	<Router>
		<div>
			<h1>Hello World</h1>
			<Link to='/first'>First</Link>
			<Link to='/second'>Second</Link>
			<Link to='/third'>Third</Link>
		</div>
	</Router>
);




ReactDOM.render(<App />, document.getElementById("root"))




