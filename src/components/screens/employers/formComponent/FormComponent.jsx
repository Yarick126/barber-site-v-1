import { memo, useEffect, useState } from "react"
import Button from "../../../ui/button/Button"
import { UseSetEmployer } from "../useSetEmloyer"
import './formComponent.module.scss'
import Notification from "../../../ui/notification/Notification"

const FormComponent = memo(({imagePath})=> {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [error , setError] = useState()
  const [success , setSuccess] = useState()
  const {mutate,isError,isSuccess} = UseSetEmployer()

  useEffect(()=>{
    setError(isError)
    setSuccess(isSuccess)
  }, [isError, isSuccess])

  return (
    <form>
      {error ? <Notification color={'red'} text={'Ошибка при добавлении!'} isError={true}/>: ''}
      {success ? <Notification color={'green'} text={'Успешно добавлено!'} isError={false}/>: ''}
      <label>Должность:</label>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      <label>Описание сотрудника:</label>
      <textarea type="text" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      <Button   
        text='Добавить'
        onclick={
          (e)=>{
            e.preventDefault()
            mutate(
              {
                name: name,
                description: description,
                image: imagePath
              })
            }   
        }/>
    </form>
  )
})

export default FormComponent