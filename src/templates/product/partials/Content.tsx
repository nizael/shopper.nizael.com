'use client'
import styles from '../product.module.css'
import { ButtonIcon } from '@components/buttons/button-icon'
import { CardModuleCatalog } from '@components/cards/card-module-catalog'
import { Dropdowns } from '@components/shared/dropdowns'
import { List } from '@components/shared/list'
import { DescriptionText,  Headline2, Headline3, HelpText } from '@components/shared/text'
import { MdFavoriteBorder } from 'react-icons/md'
import { SimpleListItem } from '@components/shared/list/partials/SimpleListItem'
import { TagMd } from '@components/shared/tags/TagMd'
import { Select } from '@components/select'
import { useEffect, useState } from 'react'
import { useProductStore } from '@stores/product'
import { IProduct, ISku } from '@stores/product/product'

export const Content = () => {
  const [product, skuGroupBySize] = useProductStore(s => [s.product, s.skuGroupBySize])

  const [skuKeys, setSkuKeys] = useState([] as string[])
  const [skuSlected, setskuSlected] = useState({} as ISku | undefined)
  const [selectSizeOpen, setSelectSizeOpen] = useState(false)
  const [selectColorOpen, setSelectColorOpen] = useState(false)
  
  useEffect(() => {
    if (product?.Sku)
      setSkuKeys(Object.keys(product.Sku))
  }, [product])

  useEffect(() => {
    if (skuKeys.length)
      setskuSlected(product?.Sku[skuKeys[0]][0])
  }, [product?.Sku, skuKeys])

  return (
    <>
      <div className={styles.content}>
        <div className={styles.carousel}>
          {skuSlected?.imagesURLs?.map((img, index)=><img key={index} src={img}alt="" />)}
        </div>
        <div className={styles.productData}>
          <div className={styles.frameDropdowns}>
            <Dropdowns label='Tamanhos' onClick={() => setSelectSizeOpen(true)} />
            <Dropdowns label='Cores' onClick={() => setSelectColorOpen(true)} />
            <ButtonIcon variant='light' icon={<MdFavoriteBorder color='var(--cl-dark-secondary)' size={24} />} />
          </div>
          <div className={styles.frameInfo}>
            <div>
              <Headline2>{product?.name}</Headline2>
              <HelpText>{product?.subcategory.name}</HelpText>

              {/* <div>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                (10)
              </div> */}
            </div>
            <Headline2>{
              skuSlected?.salePrice?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }</Headline2>
          </div>
          <DescriptionText>{product?.description}</DescriptionText>
        </div>
        <List>
          <SimpleListItem>Informação de Envio</SimpleListItem>
          <SimpleListItem>Comentários</SimpleListItem>
        </List>
        {/* <div className={styles.youMightLike}>
          <div className={styles.headeline}>
            <div className={styles.frameYml}>
              <Headline3>Você pode gostar</Headline3>
            </div>
            <HelpText onClick={() => { }} style={{ color: 'var(--cl-dark-primary)' }}>Ver todos</HelpText>
          </div>
          <div className={styles.frameProducts}>
            {products.map((product, index) => <CardModuleCatalog key={index} data={product} />)}
          </div>
        </div> */}
      </div>
      <div className={styles.componentsHidden}>
        <div className={styles.selectContainer} style={!selectSizeOpen ? { height: 0 } : undefined}>
          <Select isOpen={selectSizeOpen} label='Selecione o tamanho'>
            {product?.Sku ? Object.keys(product?.Sku!).map((e, index) => <TagMd key={index} onClick={() => setSelectSizeOpen(false)} label={e} />) : undefined}
            {/* <TagMd onClick={() => setSelectSizeOpen(false)} label='PP' />
            <TagMd onClick={() => setSelectSizeOpen(false)} label='P' />
            <TagMd onClick={() => setSelectSizeOpen(false)} label='M' />
            <TagMd onClick={() => setSelectSizeOpen(false)} label='G' />
            <TagMd onClick={() => setSelectSizeOpen(false)} label='GG' /> */}
          </Select>
          <List style={{ backgroundColor: 'var(--cl-light-secondary)' }}>
            <SimpleListItem> Informações do tamanho</SimpleListItem>
          </List>
        </div>
        <div className={styles.selectContainer} style={!selectColorOpen ? { height: 0 } : undefined}>
          <Select isOpen={selectColorOpen} label='Selecione a cor'>
            <TagMd onClick={() => setSelectColorOpen(false)} label='Preto' />
            <TagMd onClick={() => setSelectColorOpen(false)} label='Amarelo' />
            <TagMd onClick={() => setSelectColorOpen(false)} label='azul' />
            <TagMd onClick={() => setSelectColorOpen(false)} label='Vermelho' />
          </Select>
        </div>
      </div>
    </>
  )
}