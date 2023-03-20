'use client'
import styles from './buttonOutline.module.css'
interface ButtonOutline{
  onClick?(): void
  variant?: 'small' | 'big'
  label: string
}
type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const ButtonOutline = (props: ButtonOutline & Omit<Button, 'onClick'>) => {

  const buttonProps = { ...props }
  const keysButtonOutline: (keyof ButtonOutline)[] = ['onClick', 'variant', 'label']
  for (const att in keysButtonOutline) {
    delete buttonProps[keysButtonOutline[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.buttonOutline} ${styles[props.variant!]}`}
      {...buttonProps}
    >
      {props.label}
    </button>
  )
}

