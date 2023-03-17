import styles from './cardListCatalog.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@shared/text'
import { ButtonIcon } from '@shared/button-icon'
import { MdFavoriteBorder } from "react-icons/md";

interface CardListCatalog {
  onClick?(): void
}
export const CardListCatalog = () => {
  return (
    <div className={styles.cardListCatalog}>
      <img src="https://i.pinimg.com/736x/4d/2e/43/4d2e43409830707c214e13d5919b1f11.jpg"
        alt="Camisa" />

      <div className={styles.itemData}>
        <Subheads>Pullover</Subheads>
        <HelpText>Mango</HelpText>
        <div className={styles.rating}>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          (10)
        </div>
        <DescriptiveItems>R$ 9,99</DescriptiveItems>
        <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              color:'var(--cl-dark-secondary)',
              position: 'absolute',
              zIndex: 10,
              right: 0,
              bottom: 0,
              transform: 'translateY(60%)',
            }}
            variant='light' icon={<MdFavoriteBorder size={24}/>} />
        </div>
      </div>
      
    </div>
  )
}