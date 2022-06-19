import { urls } from "../constants/ursl";
import { axiosService } from "./axios.service";

 const exerciseService={
    getAll:()=>axiosService.get(''),
    getById:(id)=>axiosService.get(`${urls.exercise}/${id}`)
}

export {exerciseService}