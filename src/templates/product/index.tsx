import styles from './product.module.css'
import { Content } from "./partials/Content"
import { Header } from "./partials/Header"

export const Product = () => {
  return (
    <div className={styles.product}>
      <Header />
      <Content />
    </div>
  )
}