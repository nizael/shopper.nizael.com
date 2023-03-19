'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import { GrMoreVertical } from 'react-icons/gr';
import styles from './menuMore.module.css'
interface MenuMore {
  children?: PropsWithChildren
  isOpen?: boolean
  onOpen?(): void
  onClose?(): void
}type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const MenuMore = (props: MenuMore & Omit<Div, 'onClick'>) => {
  const DivProps = { ...props }
  const keysDivProps: (keyof MenuMore)[] = ['children', 'isOpen', 'onClose', 'onOpen']
  for (const att in keysDivProps) {
    delete DivProps[keysDivProps[att]]
  }

  function handleClick() {

    if (props.isOpen && props.onClose) props.onClose()


    if (!props.isOpen && props.onOpen) props.onOpen()
  }

  return (
    <div
      onClick={handleClick}
      className={styles.menuMore}
      tabIndex={1}
      {...DivProps}
    >
      <GrMoreVertical size={24} />
      <div className={styles.container}
        style={{
          display: !props.isOpen ? 'none' : undefined
        }}
      >
        {props?.children}
      </div>
    </div>
  )
}
