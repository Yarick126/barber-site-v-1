import { useMutation } from "@tanstack/react-query"
import EmployerService from "../../../services/employer.service"

export const UseSetEmployer = () => {
  return useMutation(['post employer'], EmployerService.postEmployer,{
    onError:(error)=>{
      console.log(error.response.data.message);
    }
  })
}