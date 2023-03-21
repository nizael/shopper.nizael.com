'use client'
import styles from './button.module.css'
type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
interface TabButton {
  icon: JSX.Element
  onClick?(): void
  isActive?: boolean
  variant?: 'light' | 'dart'
}
export const ButtonIcon = (props: TabButton & Omit<Button, 'onClick'>) => {

  const buttonProps = { ...props }
  const keysTabButton: (keyof TabButton)[] = ['icon', 'onClick', 'isActive', 'variant']
  for (const att in keysTabButton) {
    delete buttonProps[keysTabButton[att]]
  }

  function handleClick() {
    if (props.onClick)
      props.onClick()
  }

  return (
    <button
      style={props.isActive ? {
        color: 'black'
      } : undefined}
      onClick={handleClick}
      className={`${styles.buttonIcon} ${styles[props.variant!]}`}
      {...buttonProps}
    >
      {props.icon}
    </button>
  )
}

