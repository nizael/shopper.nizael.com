import styles from './cardModuleCatalog.module.css'
import { CiStar } from 'react-icons/ci'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { ButtonIcon } from '@components/buttons/button-icon'
import { MdFavoriteBorder } from "react-icons/md";

interface CardModuleCatalog {
  data?: product
}

interface product {
  id: number
  name: string
  color: string
  size: string
  price: number
  imageOfEach: string
  subcategory: string
  rating: {
    percentual: number
    quantity: number
  }
}

type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const CardModuleCatalog = (props: CardModuleCatalog & Div) => {

  const cardModuleCatalogProps = { ...props }
  const keysCardModuleCatalog: (keyof CardModuleCatalog)[] = ['data']
  for (const att in keysCardModuleCatalog) {
    delete cardModuleCatalogProps[keysCardModuleCatalog[att]]
  }
  return (
    <div
      {...cardModuleCatalogProps}
      className={styles.cardModuleCatalog}>
      <img src={props.data?.imageOfEach}
        alt={props.data?.name} />
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
      <HelpText>{props.data?.subcategory}</HelpText>
      <Subheads>{props.data?.name}</Subheads>
      <DescriptiveItems>{props.data?.price}</DescriptiveItems>
    </div>
  )
}