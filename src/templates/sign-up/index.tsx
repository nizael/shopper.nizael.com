import { Header } from "./partial/Header"
import styles from './signUp.module.css'
import { Content } from "./partial/Content"
export const SignUp=()=>{
  return(
    <div className={styles.signUp}>
      <Header/>
      <Content/>
    </div>
  )
}