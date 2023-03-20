'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { CardListBag } from '@components/cards/card-list-bag'
import { DescriptiveItems, Headline1, Subheads } from '@components/shared/text'
import { TextField } from '@components/shared/text-field'
import { useBagStore } from '@stores/bag'
import { useState } from 'react'
import { IoArrowForward, IoClose } from 'react-icons/io5'
import styles from '../cart.module.css'


interface Product {
  id: number
  name: string
  color: string
  size: string
  price: number
  imageOfEach: string
  quantity: number
}

export const Content = () => {
  const [value, setValue] = useState('')
  const products = useBagStore(s => s.products)

  function getTotal(total: number, item: Product) {
    return total + (item.price * item.quantity);
  }

  const amount = products.reduce(getTotal, 0);

  return (
    <div className={styles.content}>
      {products.map((product, index) => <CardListBag key={index} data={product} />)}

      <TextField
        placeholder='Digite seu código promocional'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        button={<ButtonIcon
          variant='dart'
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
        >{amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Subheads>
      </div>

      <ButtonPrimary label='COMPRAR' style={{ position: 'sticky', bottom: '0' }} />
    </div>
  )
}