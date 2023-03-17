import Head from 'next/head'
import styles from '../home.module.css'
export const Header = () => {
  return (
    <>
      <Head>
      <meta name="viewport" content="user-scalable=no"></meta>

        <title>My page title</title>
      </Head>
      <header className={styles.header}>Home</header>
    </>
  )
}