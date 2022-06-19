import { urls } from "../constants/ursl";
import { axiosService } from "./axios.service";

 const targetMuscleService={
    getAll:()=>axiosService.get(`${urls.targetMuscle}`),
    getByMuscle:(muscle)=>axiosService.get(`${urls.targetMuscle}/${muscle}`)
}

export {targetMuscleService}