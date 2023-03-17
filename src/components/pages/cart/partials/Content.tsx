'use client'
import { ButtonIcon } from '@shared/button-icon'
import { ButtonPrimary } from '@shared/button-primary'
import { CardListBag } from '@shared/card-list-bag'
import { DescriptiveItems, Headline1, Subheads } from '@shared/text'
import { TextField } from '@shared/text-field'
import { useState } from 'react'
import { IoArrowForward, IoClose } from 'react-icons/io5'
import styles from '../cart.module.css'
export const Content = () => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.content}>
      <Headline1>Minha sacola</Headline1>
      <CardListBag />
      <CardListBag />
      <CardListBag />
      <TextField
        placeholder='Digite seu código promocional'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        button={<ButtonIcon
        variant='dart'
          // style={{ color: 'var(--cl-dark-secondary)' }}
          onClick={() => { setValue('') }}
          icon={<IoArrowForward size={24} />}
        />}
      />
      <div className={styles.totalAmount}>
        <DescriptiveItems
          style={{ color: 'var(--cl-dark-secondary)' }}
        >Total a pagar:</DescriptiveItems>
        <Subheads
          style={{ fontSize: '18px' }}
        >R$ 112,00</Subheads>
      </div>

      <ButtonPrimary label='COMPRAR' />
    </div>
  )
}