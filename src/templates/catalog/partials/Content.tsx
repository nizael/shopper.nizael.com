'use client'
import { CardListCatalog } from '@components/cards/card-list-catalog'
import { useCatalogStore } from '@stores/catalog'
import styles from '../catalog.module.css'
export const Content = () => {
  const products = useCatalogStore(s => s.products)

  return (
    <div className={styles.content}>
      {products.map((product, index) => <CardListCatalog key={index} data={product} />)}

    </div>
  )
}