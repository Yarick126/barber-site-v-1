import { useMutation } from "@tanstack/react-query"
import EmployerService from "../../../services/employer.service"

export const UseDeleteEmployer = () => {
  return useMutation(['delete employer'], (employerId)=> EmployerService.deleteEmployer(employerId) )
}