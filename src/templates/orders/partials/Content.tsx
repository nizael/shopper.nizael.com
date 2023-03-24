'use client'
import { CardOrder } from '@components/cards/card-order'
import { TagSm } from '@components/shared/tags/TagSm'
import { useState } from 'react'
import styles from '../orders.module.css'
import { useOrdersStore } from '@stores/orders'
export const Content = () => {
  const [selected, setSelected] = useState('delivered')
  function handleClickTag(tag: string) {
    setSelected(tag)
  }

  const orders = useOrdersStore(s => s.orders).filter(o => o.status === selected)
  // const o = orders.
  return (
    <>
      <div className={styles.tagsContainer}>
        <TagSm onClick={() => handleClickTag('delivered')} isSelected={selected === 'delivered' ? true : false} label={'Entregues'} />
        <TagSm onClick={() => handleClickTag('processing')} isSelected={selected === 'processing' ? true : false} label={'Processando'} />
        <TagSm onClick={() => handleClickTag('cancelled')} isSelected={selected === 'cancelled' ? true : false} label={'Cancelados'} />
      </div>
      <div className={styles.content}>
        <div className={styles.oderContainer}>
          {orders.map((order, index) => <CardOrder key={index} data={order} />)}
        </div>
      </div>
    </>
  )
}