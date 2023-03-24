'use client'
import styles from '../product.module.css'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { CardModuleCatalog } from '@components/cards/card-module-catalog'
import { Dropdowns } from '@components/shared/dropdowns'
import { List } from '@components/shared/list'
import { DescriptionText, Headline2, Headline3, HelpText } from '@components/shared/text'
import { UseHomeStore } from '@stores/home'
import { CiStar } from 'react-icons/ci'
import { GrFavorite } from 'react-icons/gr'
import { MdFavoriteBorder } from 'react-icons/md'
import { SimpleListItem } from '@components/shared/list/partials/SimpleListItem'
import { ListView } from '@components/shared/list/partials/listView'
import { Tag } from '@components/shared/dropdowns/partials/tag'
import { TagSm } from '@components/shared/tags/TagSm'
import { TagMd } from '@components/shared/tags/TagMd'

export const Content = () => {
  const products = UseHomeStore(s => s.products)

  return (
    <div className={styles.content}>
      <div className={styles.carousel}>
        <img src="/img/product2.png" alt="" />
        <img src="/img/product1.png" alt="" />
      </div>
      <div className={styles.productData}>
        <div className={styles.frameDropdowns}>
          <Dropdowns label='Tamanhos' />
          <Dropdowns label='Cores' />
          <ButtonIcon variant='light' icon={<MdFavoriteBorder color='var(--cl-dark-secondary)' size={24} />} />
        </div>
        <div className={styles.frameInfo}>
          <div>
            <Headline2>Vestido</Headline2>
            <HelpText>Vestudo preto curto</HelpText>

            <div>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              (10)
            </div>
          </div>
          <Headline2>R$ 19,90</Headline2>
        </div>
        <DescriptionText>Vestido curto em jersey macio de algodão com botões decorativos na frente e decote quadrado largo com folhos e elástico oculto. Corte elástico sob o busto e mangas curtas bufantes com pequeno folho.</DescriptionText>
      </div>
      <List>
        <SimpleListItem>Informação de Envio</SimpleListItem>
        <SimpleListItem>Informação de Envio</SimpleListItem>
      </List>
      <div className={styles.youMightLike}>
        <div className={styles.headeline}>
          <div className={styles.frameYml}>
            <Headline3>Você pode gostar</Headline3>
            {/* <HelpText>Você nunca viu isso antes!</HelpText> */}
          </div>
          <HelpText onClick={() => { }} style={{ color: 'var(--cl-dark-primary)' }}>Ver todos</HelpText>
        </div>
        <div className={styles.frameProducts}>
          {products.map((product, index) => <CardModuleCatalog key={index} data={product} />)}
        </div>
      </div>

    </div>
  )
}