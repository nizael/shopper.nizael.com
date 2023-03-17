'use client'
import { useMemo } from 'react'
import styles from '../layout.module.css'
type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
interface TabButton {
  label: string
  icon: JSX.Element
  onClick?(): void
  isActive?: boolean
}
export const Button = (props: TabButton & Omit<Button, 'onClick' | 'key' >) => {

  const buttonProps = { ...props }
  const keysTabButton: (keyof TabButton)[] = ['icon', 'label', 'onClick',  'isActive']
  for (const att in keysTabButton) {
    delete buttonProps[keysTabButton[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }


  return (
    <button
      style={props.isActive ? {
        color: 'black'
      } : undefined}
      onClick={handleClick}
      className={styles.button}
      {...buttonProps}
    >
      {props.icon}
      {props.label}
    </button>
  )
}

