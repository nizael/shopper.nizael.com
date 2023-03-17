import { CardListCatalog } from '@shared/card-list-catalog'
import { DescriptiveItems, Headline2 } from '@shared/text'
import styles from '../catalog.module.css'
export const Content = () => {
  return (
    <div className={styles.content}>
      <CardListCatalog/>
      <CardListCatalog/>
      <CardListCatalog/>
      <CardListCatalog/>
      <CardListCatalog/>
      <CardListCatalog/>
    </div>
  )
}