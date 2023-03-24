'use client'
import { PropsWithChildren, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import styles from './dropdowns.module.css'
interface Dropdowns {
  children?: JSX.Element
  isOpen?: boolean
  label?: string
  onClick?(): void
}

export const Dropdowns = (props: Dropdowns) => {

  const [open, setOpen] = useState(false)

  const dropdownsProps = { ...props }
  const keysTabDropdowns: (keyof Dropdowns)[] = ['onClick', 'children', 'isOpen', 'label']
  for (const att in keysTabDropdowns) {
    delete dropdownsProps[keysTabDropdowns[att]]
  }

  function handleClick() {
    if (props.onClick)
      props.onClick()
    if (props.isOpen) return
    if (props.children)
      setOpen(state => !state)
  }

  function handleBlur() {
    if (props.children)
      setOpen(false)
  }
  
  return (
    <div
      tabIndex={1}
      onBlur={handleBlur}
      onClick={handleClick}
      className={styles.dropdowns}
      {...dropdownsProps}
    >
      {props.label}
      <div
        className={styles.drawer}
        style={props.isOpen || open ? { display: 'flex' } : undefined}
      >
        {props.children}
      </div>
      <MdKeyboardArrowDown size={24} />
    </div>
  )
}