import styles from './buttonPrimary.module.css'
interface ButtonPrimary{
  onClick?(): void
  variant?: 'smal' | 'big'
  label: string
}
type Button = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const ButtonPrimary = (props: ButtonPrimary & Omit<Button, 'onClick'>) => {

  const buttonProps = { ...props }
  const keysButtonPrimary: (keyof ButtonPrimary)[] = ['onClick', 'variant', 'label']
  for (const att in keysButtonPrimary) {
    delete buttonProps[keysButtonPrimary[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.buttonPrimary} ${styles[props.variant!]}`}
      {...buttonProps}
    >
      {props.label}
    </button>
  )
}

