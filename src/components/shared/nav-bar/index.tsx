import styles from './navBar.module.css'

import { Headline3 } from '@components/shared/text';
interface Header {
  startButton?: JSX.Element
  headline?: string
  andButton?: JSX.Element
}
export const NavBar = (props: Header) => {
  return (
    <header className={styles.header}>
      <div className={styles.startButton}> {props.startButton}</div>
      <Headline3>
        {props.headline}
      </Headline3>
      <div className={styles.andButton}> {props.andButton}</div>
    </header>
  )
}