import Header from "./header/Header"
import styles from './layout.module.scss'

const Layout = ({children}) => {
  return (
    <section className={styles.layout}>
      <Header/>
      {children}
    </section>
  )
}

export default Layout