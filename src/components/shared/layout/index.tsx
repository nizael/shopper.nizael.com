import { TabBar } from "./partials/tabBar";
import styles from './layout.module.css'
import { PropsWithChildren } from "react";
export const Layout = ({children}: PropsWithChildren) => {
  return(
    <div className={styles.layout}>
      {children}
      <TabBar />
    </div>
  )
}
