import styles from './selectSize.module.css'
import { List } from "@components/shared/list"
import { SimpleListItem } from "@components/shared/list/partials/SimpleListItem"
import { DescriptiveItems } from "@components/shared/text"
import { PropsWithChildren } from 'react'

interface SelectSize {
  children?: PropsWithChildren
  isOpen?: boolean
  label?: string
  // open?(): void
  // close?(): void
}

type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Select = (props: SelectSize & Div) => {

  const selectSizeProps = { ...props }
  const keysSelectSize: (keyof SelectSize)[] = ['children','isOpen', 'label']
  for (const att in keysSelectSize) {
    delete selectSizeProps[keysSelectSize[att]]
  }

  return (
      <div className={styles.select}
        {...selectSizeProps}
      >
        <DescriptiveItems>{props.label}</DescriptiveItems>
        <div className={styles.frameSelect}>
          {props.children}
        </div>
      </div>

  )
}