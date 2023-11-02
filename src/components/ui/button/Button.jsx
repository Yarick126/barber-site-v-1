import { memo } from 'react'
import styles from './button.module.scss'

const Button = memo( ({text, onclick, isAuth=false, onclickTwo=null}) => {
  return (
  <div className={styles.buttons}>
    <button onClick = {onclick}>
      {text}      
    </button>
    {text !== '+' && isAuth && <button onClick={onclickTwo}>x</button>}
  </div>
  )
})

export default Button