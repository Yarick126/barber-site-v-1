
import Layout from '../../layout/Layout';
import styles from './auth.module.scss';
import Field from '../../ui/field/Field';
import Loader from '../../ui/Loader';
import { useAuthPage } from './useAuthPage';
import { useState } from 'react';
import { useEffect } from 'react';
import Notification from '../../ui/notification/Notification';


const isLoadingAuth = false
export const Auth = () => {

  const {errors, handleSubmit, isLoading, onSubmit, register, isError, isSuccess, isAuth} = useAuthPage()
  const [error , setError] = useState()
  const [success , setSuccess] = useState()

  useEffect(()=>{
    setError(isError)
    setSuccess(isSuccess)
  },[isError,isSuccess])


  return (
    <Layout>
      {error ? <Notification color={'red'} text={'Ошибка при входе!'} isError={true}/>: ''}
      {success ? <Notification color={'green'} text={'Вы успешно вошли!'} isError={false}/>: ''}
      {(isLoading || isLoadingAuth) && <Loader />}
      {
        !isAuth ?
      <form className={styles.auth} onSubmit={handleSubmit(onSubmit)}>
        
        <p>ВХОД ДЛЯ АДМИНИСТРАТОРА!</p>

        <Field 
          error={errors?.login?.message}
          name='login'
          auth={register}
          options={
            {
              required: 'Требуется логин!'
            }
          }
          type="text"
          placeholder="Введите логин"
        />
        <Field 
          error={errors?.password?.message}
          name='password'
          auth={register}
          options={
            {
              required: 'Требуется пароль!'
            }
          }
          type="password"
          placeholder="Введите пароль"
        />
       <button type='submit' >Войти</button>
      </form>:
      <div className={styles.success}>
        <span >ВХОД ВЫПОЛНЕН!</span>
      </div>
        
      }
    </Layout>
  )
}
export default Auth