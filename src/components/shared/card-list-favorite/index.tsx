import styles from './cardListFavorite.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@shared/text'
import { ButtonIcon } from '@shared/button-icon'
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from 'react-icons/bi';
import { GrMoreVertical } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';

interface CardListFavorite {
  onClick?(): void
}
export const CardListFavorite = () => {
  return (
    <div className={styles.CardListFavorite}>
      <img src="https://www.wefashiontrends.com/wp-content/uploads/2020/02/roupas-basicas-e-fashion.jpg"
        alt="Camisa" />

      <div className={styles.itemData}>
      <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 0,
              top: 0,
              color:'var(--cl-dark-secondary)',
            }}
            icon={<IoClose size={24} />} />
        </div>
        <HelpText>Mango</HelpText>
        <Subheads>Pullover</Subheads>
        <div className={styles.colorSize}>
          <HelpText>Cor: <b>Preto</b></HelpText>
          <HelpText>Tamanho: <b>G</b></HelpText>
        </div>
        <div className={styles.priceRating}>
        <DescriptiveItems>R$ 9,99</DescriptiveItems>
        <div className={styles.rating}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          (10)
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