import Cookies from "js-cookie"
import { $axios } from "../api"
import { TOKEN } from "../constants"

class AuthServices {
  async main(login, password){
      try {
        const {data} = await $axios.post(`/auth/login`, {
          login,
          password
        })
        if(data.token) Cookies.set(TOKEN, data.token)
        return data
      } catch (error) {
        throw new Error(error)
      }
  }
}
export default new AuthServices()