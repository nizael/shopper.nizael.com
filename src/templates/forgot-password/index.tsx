import { Header } from "./partial/Header"
import styles from './forgotPassword.module.css'
import { Content } from "./partial/Content"
export const ForgotPassword=()=>{
  return(
    <div className={styles.forgotPassword}>
      <Header/>
      <Content/>
    </div>
  )
}