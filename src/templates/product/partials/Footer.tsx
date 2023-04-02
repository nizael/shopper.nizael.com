'use client'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { TagMd } from '@components/shared/tags/TagMd'
import styles from '../product.module.css'

export const Footer =()=>{
  return(
    <footer className={styles.footer}>
    <ButtonPrimary label='Adiconar a sacola' />
  </footer>
  )
}