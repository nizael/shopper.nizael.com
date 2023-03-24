'use client'
import { useState } from 'react'
import styles from './tags.module.css'
interface TagPrimary {
  onClick?(): void
  isSelected?: boolean
  label: string
}
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const TagMd = (props: TagPrimary & Omit<Div, 'onClick'>) => {

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
      className={`${styles.tagMd} ${styles[props.isSelected ? 'selected' : 'noSelected']}`}
      {...tagProps}
    >
      {props.label}
    </div>
  )
}

