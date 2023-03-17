import styles from './cardListBag.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@shared/text'
import { ButtonIcon } from '@shared/button-icon'
import { GrMoreVertical } from "react-icons/gr";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useState } from 'react';

interface CardListCatalog {
  onClick?(): void
}
export const CardListBag = () => {

  const [numberOfItems, setNumberOfItems] = useState(1)

  function addNumberOfItems() {
    setNumberOfItems(state => state + 1)
  }
  function rmNumberOfItems() {
    if (numberOfItems > 1)
      setNumberOfItems(state => state - 1)
  }
  return (
    <div className={styles.cardListCatalog}>
      <img src="https://static.stealthelook.com.br/wp-content/uploads/2021/12/moda-inclusiva-marcas-brasileiras-de-roupas-adaptadas-para-pcd-receba-costa-20211202180821.png"
        alt="Camisa" />

      <div className={styles.itemData}>
        <div className={styles.buttonFloat}>
          <ButtonIcon
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 0,
              top: 0,
              color:'var(--cl-dark-secondary)'
              // transform: 'translateY(60%)',
            }}
            icon={<GrMoreVertical size={24} />} />
        </div>
        <Subheads>Pullover</Subheads>
        <div className={styles.colorSize}>
          <HelpText>Cor: Preto</HelpText>
          <HelpText>Tamanho: G</HelpText>
        </div>
        <div className={styles.amoutPrice}>
          <div className={styles.numberOfItems}>
            <ButtonIcon variant='light'
              icon={<IoRemoveOutline size={24} />}
              onClick={rmNumberOfItems}
            />
            <DescriptiveItems style={{ color: 'var(--cl-dark-primary)' }}>{numberOfItems}</DescriptiveItems>
            <ButtonIcon variant='light'
              icon={<IoAddOutline size={24} />}
              onClick={addNumberOfItems}
            />
          </div>
          <DescriptiveItems style={{ color: 'var(--cl-dark-primary)' }}>R$ 5,99</DescriptiveItems>
        </div>

      </div>

    </div>
  )
}