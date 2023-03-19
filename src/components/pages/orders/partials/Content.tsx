'use client'
import { CardOrder } from '@shared/card-order'
import { TagPrimary } from '@shared/tag-primary'
import { useState } from 'react'
import styles from '../orders.module.css'
export const Content = () => {
  const [selected, setSelected] = useState('delivered')
  function handleClickTag(tag: string) {
    setSelected(tag)
  }
  return (
    <>
      <div className={styles.tagsContainer}>
        <TagPrimary onClick={() => handleClickTag('delivered')} isSelected={selected === 'delivered' ? true : false} label={'Entregues'} />
        <TagPrimary onClick={() => handleClickTag('processing')} isSelected={selected === 'processing' ? true : false} label={'Processando'} />
        <TagPrimary onClick={() => handleClickTag('cancelled')} isSelected={selected === 'cancelled' ? true : false} label={'Cancelados'} />
      </div>
      <div className={styles.content}>
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />

      </div>
    </>
  )
}