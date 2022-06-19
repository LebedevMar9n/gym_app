import { urls } from "../constants/ursl";
import { axiosService } from "./axios.service";

 const equipmentService={
    getByEquipment:(equipment)=>axiosService.get(`${urls.equipment}/${equipment}`)
}

export {equipmentService}