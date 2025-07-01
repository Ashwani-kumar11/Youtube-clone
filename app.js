// // let api_key ="AIzaSyD3P5lzT5Mzipyin9tRPsPdPzalbJKVOfc"
// //  let video_http ="https://www.googleapis.com/youtube/v3/videos?";
// //  let cahnnel_http = "https://www.googleapis.com/youtube/v3/videos?"

//  fetch(video_http + new URLSearchParams({
//     key: api_key,
//     part: 'snippet',
//     chart: 'mostPopular',
//     maxResult: 1,
//     regionCode: 'IN'
//  }))

//  .then(res => res.json())
//  .then(data =>{
//     console.log(data);
//     data.items.forEach(item=>{
//         getChannelIcon(item);
//     })
//  })
//  .catch(err => console.log(err));

//  const getChannelIcon = (video_data) =>{
//     fetch(cahnnel_http + new URLSearchParams({
//         key: api_key,
//         part: 'snippet',
//         id: video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data);
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//         console.log(video_data);
//     })


//  }
