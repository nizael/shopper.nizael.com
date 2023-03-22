import { Header } from "./partial/Header"
import styles from './login.module.css'
import { Content } from "./partial/Content"
export const Login=()=>{
  return(
    <div className={styles.login}>
      <Header/>
      <Content/>
    </div>
  )
}