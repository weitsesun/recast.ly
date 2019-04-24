import searchYouTube from '../lib/searchYouTube.js'
import YOUTUBE_API_KEY from '../config/youtube.js';

//handle button "onClick"
//"onClick" => call searchYouTube
  //pass in whatever's in the search box into searchYouTube function

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.liveUpdate}/>
    <button className="btn hidden-sm-down" onClick={searchYouTube.bind(this, {
      query: "cats",
      max: 5,
      key: YOUTUBE_API_KEY
    }, (data) => console.log(data))}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
