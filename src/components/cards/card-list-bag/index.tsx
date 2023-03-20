'use client'
import styles from './cardListBag.module.css'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { ButtonIcon } from '@components/buttons/button-icon'
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useMemo, useState } from 'react';
import { PopUpItem, PopUpWindow } from '@components/shared/pop-up-window';
import { MenuMore } from '@components/shared/menu-more'

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
  quantity: number
}


export const CardListBag = (props: CardListCatalog) => {
  const [openMenu, setOpenMenu] = useState(false)

  const [numberOfItems, setNumberOfItems] = useState(1)

  function addNumberOfItems() {
    setNumberOfItems(state => state + 1)
  }
  function rmNumberOfItems() {
    if (numberOfItems > 1)
      setNumberOfItems(state => state - 1)
  }
  function handleClickPopUpItem() {
    setOpenMenu(false)
  }

  useMemo(() => {
    setNumberOfItems(props.data.quantity)
  }, [props.data])

  return (
    <div className={styles.cardListCatalog}>
      <img src={props.data.imageOfEach} width={104} height={104}
        alt={props.data.name} />

      <div className={styles.itemData}>
        <div
          className={styles.buttonFloat}
        >
          <MenuMore
            style={{
              position: 'absolute',
              color: 'var(--cl-dark-primary)',
              right: '0',
            }}
            isOpen={openMenu}
            onOpen={() => setOpenMenu(true)}
            onClose={() => setOpenMenu(false)}
            onBlur={() => setOpenMenu(false)}
          >
            <PopUpWindow>
              <PopUpItem
                onClick={handleClickPopUpItem}
                label='Adicionar aos favoritos'></PopUpItem>
              <PopUpItem
                onClick={handleClickPopUpItem}
                label='Remover da Lista'></PopUpItem>
            </PopUpWindow>
          </MenuMore>

        </div>
        <Subheads>{props.data.name}</Subheads>
        <div className={styles.colorSize}>
          <HelpText>Cor: <b style={{ color: 'var(--cl-dark-primary)' }}>{props.data.color}</b> </HelpText>
          <HelpText>Tamanho: <b style={{ color: 'var(--cl-dark-primary)' }}>{props.data.size}</b></HelpText>
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
          <DescriptiveItems style={{ color: 'var(--cl-dark-primary)' }}>{(props.data.quantity * props.data.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</DescriptiveItems>
        </div>

      </div>

    </div>
  )
}