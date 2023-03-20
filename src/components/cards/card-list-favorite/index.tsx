import styles from './cardListFavorite.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { ButtonIcon } from '@components/buttons/button-icon'
import { BiShoppingBag } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

interface CardListFavorite {
  onClick?(): void
  data: Favorite
}


interface Favorite {
  id: number
  name: string
  color: string
  size: string
  price: number
  subcategory: string
  imageOfEach: string
  rating: {
    percentual: number
    quantity: number
  }
}

export const CardListFavorite = (props: CardListFavorite) => {
  return (
    <div className={styles.CardListFavorite}>
      <img src={props.data.imageOfEach} alt={props.data.name} />

      <div className={styles.itemData}>
        <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 0,
              top: 0,
              color: 'var(--cl-dark-secondary)',
            }}
            icon={<IoClose size={24} />} />
        </div>
        <HelpText>{props.data.subcategory}</HelpText>
        <Subheads>{props.data.name}</Subheads>
        <div className={styles.colorSize}>
          <HelpText>Cor: <b>{props.data.color}</b></HelpText>
          <HelpText>Tamanho: <b>{props.data.size}</b></HelpText>
        </div>
        <div className={styles.priceRating}>
          <DescriptiveItems>{props.data.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</DescriptiveItems>
          <div className={styles.rating}>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            {`(${props.data.rating.quantity})`}
          </div>

        </div>
        <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 0,
              bottom: 0,
              transform: 'translateY(60%)',
            }}
            variant='dart' icon={<BiShoppingBag size={24} />} />
        </div>
      </div>

    </div>
  )
}