var searchYouTube = ({query, max=5, key}, callback) => {
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search/",
    type: 'GET',
    success: function(data) {
      callback(data.items)
    },
    dataType: 'json',
    data: {key: key, q: query, maxResults: max, part: 'snippet', type: "video"}
  })
};

//searchYouTube({},(data)=>console.log(data));
export default searchYouTube;


// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });