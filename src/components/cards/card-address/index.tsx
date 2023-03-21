import styles from './cardAddress.module.css'
import { Checkbox } from '@components/checkbox'
import { DescriptionText, DescriptiveItems } from '@components/shared/text'
import Link from 'next/link'

interface CardAddress {
  address: string
}

export const CardAddress = (props: CardAddress) => {
  function handleOnChange() {
    console.log('cc')
  }
  return (
    <div className={styles.cardAddress}>
      <div className={styles.frame}>
        <DescriptiveItems>Jane Doe</DescriptiveItems>
        <Link href={'/'}><DescriptiveItems style={{color:'red'}}>Editar</DescriptiveItems></Link>
      </div>
      <DescriptionText style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden', /* "overflow" value must be different from "visible" */
        textOverflow: 'ellipsis',
        lineClamp: 2,
      }}>{props.address}</DescriptionText>
      <Checkbox onChange={handleOnChange} label='Use como o endereço de entrega' />
    </div>
  )
}