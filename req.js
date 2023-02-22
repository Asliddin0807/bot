const axios = require("axios");

async function downloader(instagram_url){
    try{
        const options = {
            method: 'GET',
            url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
            params: {url: instagram_url},
            headers: {
            'X-RapidAPI-Key': '9f4d378e6amsh09df1b3358cf08ep157cf3jsn74b3e88acf09',
            'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
            }
      };
      
        const res = await axios.request(options)
        const result = {
            video: res.data.video,
            caption: res.data.caption
        }

        return result
    }catch(err){
        console.log(err)
    }
}

module.exports = { downloader }
