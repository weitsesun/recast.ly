import VideoList from './VideoList.js';
import exampleVideoData from "../data/exampleVideoData.js"
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'
import YOUTUBE_API_KEY from '../config/youtube.js';

// Live-update
  // Add event listener for textbox
  // When the textbox changes:
    // Trigger state-change
    // create a controlled input box
    // create an onChange handler in App.jsx
    // Call handleSearch on change

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      query: 'cats'
    }
    // this.handleSearch();
  }

  markComplete(video){
    this.setState({
      currentVideo: video
    });

  }

  handleSearch() {
    // debugger;
    console.log('hi')
    this.props.searchYouTube({query: this.state.query, key: YOUTUBE_API_KEY}, videos => this.setState({videos, currentVideo: videos[0]}));
  }

  componentDidMount() {
    // let debounced = _.debounce((e) => console.log('asdf'), 25, {leading: true});
    // debounced();

    this.handleSearch();
    //component will automatically be rendered
  }

  // componentDidUpdate() {
    
  // }

  liveUpdate(e) {
  // Live-update of search results
    // Add event listener on form input
    // On change, trigger state change w/ debouncer:
      // Automatically triggers CDU:
        // Inside CDU: call searchYouTube
    this.setState({
      query: e.target.value
    });
    var debouncer = _.debounce(this.handleSearch.bind(this),500, {leading: true});
    debouncer();
  }

  render() {
    return (<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search liveUpdate={this.liveUpdate.bind(this)}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <div>
          <VideoList videos={this.state.videos} markComplete={this.markComplete.bind(this)}/>
        </div>
      </div>
    </div>
  </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
