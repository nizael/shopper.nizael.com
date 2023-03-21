'use client'
import { CardAddress } from '@components/cards/card-address'
import { DescriptiveItems, Headline2 } from '@components/shared/text'
import { useRouter } from 'next/navigation'
import styles from '../addresses.module.css'
import { CardCategory, CardPromotion } from './CardCategory'
export const Content = () => {
  const push = useRouter().push
  function handleClick(){
    push('/catalog')
  }
  return (
    <div className={styles.content}>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
      <CardAddress/>
    </div>
  )
}