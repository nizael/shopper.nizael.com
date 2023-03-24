import styles from './cardModuleCatalog.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { ButtonIcon } from '@components/buttons/button-icon'
import { MdFavoriteBorder } from "react-icons/md";

interface CardModuleCatalog {
  onClick?(): void
  data?: product
}

interface product {
  id: number
  name: string
  color: string
  size: string
  price: number
  imageOfEach: string
  subcategory: string
  rating: {
    percentual: number
    quantity: number
  }
}
export const CardModuleCatalog = (props: CardModuleCatalog) => {
  return (
    <div className={styles.cardModuleCatalog}>
      <img src={props.data?.imageOfEach}
        alt={props.data?.name} />
      <div className={styles.buttonFloat}>
        <ButtonIcon
          style={{
            position: 'absolute',
            zIndex: 10,
            right: 0,
            top: 0,
            transform: 'translateY(-60%)',
          }}
          variant='light' icon={<MdFavoriteBorder />} />
      </div>
      <div className={styles.rating}>
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
        (10)
      </div>
      <HelpText>{props.data?.subcategory}</HelpText>
      <Subheads>{props.data?.name}</Subheads>
      <DescriptiveItems>{props.data?.price}</DescriptiveItems>
    </div>
  )
}