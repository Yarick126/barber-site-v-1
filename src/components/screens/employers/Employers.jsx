import { useEffect, useMemo, useState } from "react"
import Layout from "../../layout/Layout"
import styles from './Employers.module.scss'
import Button from "../../ui/button/Button"
import { useAuth } from "../../../hooks/useAuth"
import { UseEmployer} from "./useEmployer.js"
import ImageLoader from "../../ui/imageLodader/ImageLoader"
import { UseDeleteEmployer } from "./useDeleteEmployer"
import employerService from "../../../services/employer.service"
import FormComponent from "./formComponent/FormComponent"

const Employers = () => {
  const {data} = UseEmployer()
  const deleteMutation = UseDeleteEmployer()
  const [employer, setEmployer] = useState()
  const [imagePath, setImagePath] = useState(null)
  const [isChangeMode, setMode] = useState(false)
  const {isAuth} = useAuth()
  
  useEffect(()=>{ 
    const fetchData = async ()=>{
      const employer = await employerService.getEmployers()
      if(!employer) return
      setEmployer(employer[0])
    }
    
    if(!employer)
      fetchData()
  })
  
  const  handleChangeEmployer = (e) => {
    setEmployer({
      ...e
    })
  }
  
  return (
    <Layout>
      <section className={styles.Employers}>
        <div>
          {
            isChangeMode ?
            <FormComponent imagePath={imagePath}/>
            :
            <div className={styles.text}>
              <span>{employer?.name ?? 'Нет сотрудников!'}</span>
              <p>{employer?.description ?? ' '}</p>
            </div>
          }
          {
            isChangeMode ?
            <ImageLoader onChange={(e)=>
              {
                e.preventDefault()
                let reader = new FileReader()
                reader.onload = function(){
                  setImagePath(reader.result)
                }
                reader.readAsDataURL(e.target.files[0])
              }}/>:
            <img src={employer?.image} alt="Нет изображения" />
          }
        </div>
        <div>
          {data && data.map(emp => (
            <Button
              key={emp.id}
              text={emp.name}
              isAuth={isAuth}
              onclickTwo={()=>{
                deleteMutation.mutate(emp.id)
                window.location.reload()
              }}
              onclick={()=>{
                handleChangeEmployer(emp)
                setMode(false)
                }
              }
            />
          ))}
          {isAuth && <Button key={-1} text={'+'} onclick={()=>{setMode(true)}}/>}
          <Button key={0} text={'Обновить'} onclick={()=>{window.location.reload()}}/>
        </div>
      </section>
    </Layout>)
}

export default Employers