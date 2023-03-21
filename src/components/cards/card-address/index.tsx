import { Checkbox } from '@components/checkbox'
import { DescriptionText, DescriptiveItems } from '@components/shared/text'
import styles from './cardAddress.module.css'
export const CardAddress = () => {
  function handleOnChange() {
    console.log('cc')
  }
  return (
    <div className={styles.cardAddress}>
      <DescriptiveItems>Jane Doe</DescriptiveItems>
      <div className={styles.frame}>
        <DescriptionText>3 Newbridge Court</DescriptionText>
        <DescriptionText>Chino Hills, CA 91709, United States</DescriptionText>
      </div>
      <Checkbox onChange={handleOnChange} label='Use as the shipping address' />
    </div>
  )
}