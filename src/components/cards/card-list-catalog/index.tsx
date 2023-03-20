import styles from './cardListCatalog.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { ButtonIcon } from '@components/buttons/button-icon'
import { MdFavoriteBorder } from "react-icons/md";

interface CardListCatalog {
  onClick?(): void
  data: Product
}

interface Product {
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
export const CardListCatalog = (props: CardListCatalog) => {
  return (
    <div className={styles.cardListCatalog}>
      <img src={props.data.imageOfEach}
        alt={props.data.name} />

      <div className={styles.itemData}>
        <Subheads>{props.data.name}</Subheads>
        <HelpText>{props.data.subcategory}</HelpText>
        <div className={styles.rating}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          {`(${props.data.rating.quantity})`}
        </div>
        <DescriptiveItems>{props.data.price.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</DescriptiveItems>
        <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              color: 'var(--cl-dark-secondary)',
              position: 'absolute',
              zIndex: 10,
              right: 0,
              bottom: 0,
              transform: 'translateY(60%)',
            }}
            variant='light' icon={<MdFavoriteBorder size={24} />} />
        </div>
      </div>

    </div>
  )
}