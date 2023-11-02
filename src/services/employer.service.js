import axios from "axios"
import { $axios } from "../api"

const EMPLOYER = '/employer'

class EmployerServices {
  
  async getEmployers(){
    try {
      return await axios
            .create({baseURL: import.meta.env.VITE_SERVER_URL})
            .get(EMPLOYER)
            .then(res => res.data)
            .catch((error)=>{console.error(error.message)})
  
    } catch (error) {
      throw new Error(error.response.data.message)
    }
  }


  async postEmployer(employer){
    return await $axios
                    .post(EMPLOYER, employer)
  }

  async deleteEmployer(employerId){
    return await $axios.delete(`${EMPLOYER}/${employerId}`).catch((error)=>{
      console.log(error.message)
    })
  }
}

export default new EmployerServices()