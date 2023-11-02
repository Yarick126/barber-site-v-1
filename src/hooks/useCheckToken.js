import { useLocation } from "react-router-dom"
import { TOKEN } from "../constants"
import { useEffect } from "react"
import { useAuth } from "./useAuth"
import Cookies from "js-cookie"


export const useCheckToken = () => {
  const { setIsAuth, isAuth } = useAuth()
	const { pathname } = useLocation()


  useEffect(()=>{
    const token = Cookies.get(TOKEN)
    if(!token) setIsAuth(false)
  }, [pathname, isAuth])

}
