import { urls } from "../constants/ursl";
import { axiosService } from "./axios.service";

 const bodyPartervice={
    getAll:()=>axiosService.get(`${urls.bodyPartList}`),
    getByPart:(part)=>axiosService.get(`${urls.bodyPart}/${part}`)
}

export {bodyPartervice}