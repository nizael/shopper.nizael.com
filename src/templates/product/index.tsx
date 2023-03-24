import styles from './product.module.css'
import { Content } from "./partials/Content"
import { Header } from "./partials/Header"
import { ButtonPrimary } from '@components/buttons/button-primary'
import { Footer } from './partials/Footer'

export const Product = () => {
  return (
    <div className={styles.product}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}