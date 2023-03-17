import styles from './cardModuleCatalog.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@shared/text'
import { ButtonIcon } from '@shared/button-icon'
import { MdFavoriteBorder } from "react-icons/md";

interface CardModuleCatalog {
  onClick?(): void
}
export const CardModuleCatalog = () => {
  return (
    <div className={styles.cardModuleCatalog}>
      <img src="https://a-static.mlcdn.com.br/1500x1500/camisa-long-baruk-amarela-tam-m/trippy/3bdb947c56ce11edbee34201ac185019/9009d86f41f734ffeb26186934ba6b72.jpeg"
        alt="Camisa" />
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
      <HelpText>Camisa de manga</HelpText>
      <Subheads>T-Shirt Saling</Subheads>
      <DescriptiveItems>R$ 9,99</DescriptiveItems>
    </div>
  )
}