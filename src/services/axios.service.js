import axios from "axios";
import { baseURL } from '../constants'


const axiosService = axios.create({
    baseURL, 
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})


export { axiosService }