'use client'
import { ButtonPrimary } from '@components/buttons/button-primary'
import styles from '../product.module.css'

export const Footer =()=>{
  return(
    <footer className={styles.footer}>
    <ButtonPrimary label='Adiconar a sacola' />
  </footer>
  )
}