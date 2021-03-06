import React,{ Component } from 'react';
import ReactDOM from 'react-dom'

class SearchBar extends Component
{
	constructor(props)
	{
		super(props);

		this.state={term: ''};
	}
	render()
	{
		return (<div>
			<input
			value={this.state.value} 
			onChange = {event => this.setState({term:event.target.value})} />
			<br/>
			Value of input: {this.state.term}

			</div>
			);
	}
}

export default SearchBar;