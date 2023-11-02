import Layout from "../../layout/Layout"
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <Layout>
      <section className={styles.contacts}>
        <span>КОНТАКТЫ</span>
        <p>
        Связаться со стилистом-колористом Людой можно с помощью:<br/> 
        Номер телефона - 8 (988) 635-97-88<br/>
        Инстаграмм - colorist_luda<br/>
        Адрес : город Дербент, ул. Генерал Сеидова, д. 20<br/>
        </p>
      </section>
    </Layout>)
}
export default Contacts