import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'; 

const API_KEY = 'AIzaSyAHG3TXxu7tZWn6BAiVnJQXaOOS5UeWh5Y';
	


class App extends Component 
{
	constructor(props)
	{
		super(props);

		this.state={videos:[]};

		YTSearch({key: API_KEY,term:'surfboards'},(videos) =>
		{
			this.setState({videos});
		});
	}
	
	render()
	{
		return ( 
			<div> 
				<SearchBar /> 
				<VideoDetail video={this.state.videos[1]} />
				<VideoList videos={this.state.videos}/> 
			</div>
			);
	}
}
ReactDOM.render(<App/>,document.querySelector('.container'));