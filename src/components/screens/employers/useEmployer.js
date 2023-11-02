import { useQuery } from "@tanstack/react-query"
import EmployerService from "../../../services/employer.service"

export const UseEmployer = () => {
  try {
    return useQuery(['get employers'], () => EmployerService.getEmployers(),{
      onError: (error)=>{
        console.log(error);
      }
    })
  } catch (error) {
    console.log(error);
  }
  
}



