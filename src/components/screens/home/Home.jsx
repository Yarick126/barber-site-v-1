import Layout from "../../layout/Layout"
import styles from './Home.module.scss'

function Home() {

  return (
      <Layout>
        <section className={styles.Home}>
            <div>
              <span>САЛОН КРАСОТЫ</span>
              <p>
              У нас в салоне вы можете получить услуги косметолога: консультацию, перманентный макияж, чистку лица, омолаживающие маски, пилинг, мезотерапию. Визажист предлагает свадебный, вечерний макияж, креативный макияж. У нас в салоне имеется стилист, который сделает вам стрижку, окрашивание, укладку, плетение, свадебную прическу.
              </p>
              <span>ВАША КРАСОТА В НАДЁЖНЫХ РУКАХ</span>
            </div>
        </section>
      </Layout>
  )
}

export default Home
