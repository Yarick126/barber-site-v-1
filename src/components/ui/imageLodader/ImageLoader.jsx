import { memo } from 'react'
import styles from './imageLoader.module.scss'

const ImageLoader = memo(({onChange}) => {

  return (
    <label className={styles.imageLoader}>
      <input type="file" onChange={onChange} title='Выберите картинку'/>
    </label> 
  )
})
export default ImageLoader