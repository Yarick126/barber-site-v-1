import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { useMutation } from "@tanstack/react-query"
import authService from "../../../services/auth.service"
import { useMemo } from "react"

export const useAuthPage = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors},
    reset
  } = useForm({mode: 'onChange'})

  const {isAuth, setIsAuth} = useAuth()

  const {mutate, isLoading, isError,isSuccess} = useMutation(
    ['auth'], 
    ({login, password}) => authService.main(login, password), 
    {
      onSuccess: () => {
          setIsAuth(true)
          reset()
        }
      }
    )

  const onSubmit = data => {
    mutate(data)
  }

  return useMemo(
    ()=>({
      register,
      handleSubmit,
      errors,
      isLoading,
      onSubmit,
      isAuth,
      isError,
      isSuccess
    })
  )
}