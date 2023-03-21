'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { CardAddress } from '@components/cards/card-address'
import { DescriptiveItems, Headline2 } from '@components/shared/text'
import { useRouter } from 'next/navigation'
import { IoAddOutline } from 'react-icons/io5'
import styles from '../addresses.module.css'
import { CardCategory, CardPromotion } from './CardCategory'
export const Content = () => {

  return (
    <div className={styles.content}>
      <CardAddress address='3 Newbridge Court Chino Hills, CA 91709, United States, Newbridge Court Chino Hills, CA 91709, United States Newbridge Court Chino Hills, CA 91709, United States'/>
      <div className={styles.constinerButton}>
        <ButtonIcon variant='dark' icon={<IoAddOutline size={24}/>}/>
      </div>
    </div>
  )
}