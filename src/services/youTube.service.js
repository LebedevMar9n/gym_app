import axios from "axios";



const youTubeService = axios.create({
    headers:  {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
})


export { youTubeService }