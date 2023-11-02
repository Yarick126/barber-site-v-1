import style from './notification.module.scss'
import {VscError} from 'react-icons/vsc'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Notification = ({color, text, isError}) => {
  return (
    <div className={style.notification}>
      <span className={style[`${color}`]}>{text}</span>
      {isError? <VscError size={30}/>: <BsFillCheckCircleFill size={30}/>}
    </div>
  )
}

export default Notification
