import style from './field.module.scss'

const Field = ({auth, name, options, error, ...rest }) => {

  return (
    <div>
      <input {...auth(name, options)} {...rest} className={style.input}/>
      {error && <div className={style.error}> {error} </div>}
    </div>
  )
}

export default Field