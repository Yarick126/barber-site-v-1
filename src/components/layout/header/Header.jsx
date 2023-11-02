import styles from './Header.module.scss';
import {BsTelephone, BsPersonCircle} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

const  Header= () => {

	const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div>
        <span>МЫ ОТКРЫТЫ</span>
        <span>7 ДНЕЙ В НЕДЕЛЮ, С 9:00 ДО 24:00</span>
      </div>
      <div>
        <BsTelephone size={25}/>
        <span>8 988 635-97-88</span>
        <Link to='/auth'><BsPersonCircle size={25} color='white'/></Link>
      </div>
      <div>
       <Link to='/' 
          onClick={
            (e)=>
            {
              e.preventDefault()
              navigate('/')
            }}
       >ГЛАВНАЯ</Link>
       <Link to='/contacts'
          onClick={
            (e)=>
            {
              e.preventDefault()
              navigate('/contacts')
            }}
       >КОНТАКТЫ</Link>
       <Link to='/employers'
          onClick={
            (e)=>
            {
              e.preventDefault()
              navigate('/employers')
            }}
       >СОТРУДНИКИ</Link>
      </div>
    </header>
  )
}

export default Header