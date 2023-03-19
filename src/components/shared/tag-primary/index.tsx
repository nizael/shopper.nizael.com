'use client'
import { useState } from 'react'
import styles from './tagPrimary.module.css'
interface TagPrimary {
  onClick?(): void
  isSelected?: boolean
  label: string
}
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const TagPrimary = (props: TagPrimary & Omit<Div, 'onClick'>) => {
  // const [isSelected, setIsSelected] = useState(props.isSelected)
  // console.log(isSelected)

  const tagProps = { ...props }
  const keysTagPrimary: (keyof TagPrimary)[] = ['onClick', 'isSelected', 'label']
  for (const att in keysTagPrimary) {
    delete tagProps[keysTagPrimary[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.tagPrimary} ${styles[props.isSelected ? 'selected' : 'noSelected']}`}
      {...tagProps}
    >
      {props.label}
    </div>
  )
}

