import { ButtonIcon } from '@assets/components/buttons/button-icon'
import { ChangeEvent, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './textField.module.css'
interface TextField {
  variant?: 'light' | 'dark' | 'error'
  value?: string
  button?: JSX.Element
  onChange?(e: ChangeEvent<HTMLInputElement>): void
}
type Input = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export const TextField = (props: TextField & Omit<Input, 'value' | 'onChange'>) => {

  const InputProps = { ...props }
  const keysInput: (keyof TextField)[] = ['onChange', 'value', 'variant', 'button']
  for (const att in keysInput) {
    delete InputProps[keysInput[att]]
  }
  function handleChange(y: ChangeEvent<HTMLInputElement>) {
    if (props.onChange)
      props?.onChange(y)
  }

  return (
    <div className={styles.textField}>
      <input
        value={props.value}
        onChange={(e) => handleChange(e)}
        type="text"
        {...InputProps}

      />
      {props.button}
    </div>
  )
}