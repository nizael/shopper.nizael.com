import React, { useState } from 'react'
import styles from './input.module.css'
interface IInputProps {
  label?: string
  onBlur?(event?: React.FocusEvent<HTMLInputElement, Element>): void
  onFocus?(event?: React.FocusEvent<HTMLInputElement, Element>): void
  sx?: {
    label?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
    container?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  }
}
type IInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export const Input = (props: IInputProps & IInput) => {

  const keyInputProps: (keyof IInputProps)[] = ['label', 'onBlur', 'onFocus']

  const inputProps = { ...props }
  keyInputProps.forEach(element => delete inputProps[element])
  const [isFocused, setIsFocused] = useState(false)

  function handleBlur(event?: React.FocusEvent<HTMLInputElement, Element>) {
    if (props.onBlur)
      props.onBlur(event)

    if (!event?.currentTarget.value)
      setIsFocused(false)
  }

  function handleFocus(event?: React.FocusEvent<HTMLInputElement, Element>) {
    if (props.onFocus)
      props.onFocus(event)
    setIsFocused(true)
  }

  return (
    <div
      className={styles.input}
      {...props.sx?.container}
    >
      <label
        className={`${styles.label} ${isFocused ? styles.isFocused : undefined}`}
        {...props.sx?.label}
      >{props.label}</label>
      <input
        onFocus={(event) => handleFocus(event)}
        onBlur={(event) => handleBlur(event)}
        {...inputProps}
      />
    </div>
  )
}