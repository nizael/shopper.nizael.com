import { ButtonIcon } from '@components/buttons/button-icon'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
import styles from './input.module.css'
interface Input {
  onChange?(value: string): void
  value?: string
  type?: 'text' | 'password' | 'email' | 'tel'
  variant?: 'error' | 'success'
  errorMessage?: string
  label?: string
  id?: string
  placeholder?: string
  required?: boolean
}

export const Input = (props: Input) => {
  const [isFocused, setIsFocused] = useState(false)

  function handleChange(value: string) {
    if (props.onChange)
      props.onChange(value)

  }

  const state: { [key: string]: JSX.Element } = {
    error: <ButtonIcon icon={<IoCloseSharp size={24} fill='var(--cl-error)' />} />,
    success: <MdDone
      size={24}
      fill='var(--cl-success)'
    />
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.input} ${styles[props.variant!]}`}>
        <label
          style={isFocused || props.value ? {
            top: '50%',
            transform: 'translateY(calc(-100% - .75rem))',
            fontSize: '11px'
          } : undefined}
          htmlFor={props.id || ''} className={styles.label}>{props.label}</label>
        <input
        {...props}
          required={props.required}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => handleChange(e.currentTarget.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={props.type || "text"} />
        {state[props.variant!]}
      </div>
      <span style={props.variant === 'error' ? { display: 'block' } : undefined} className={styles.alert}>{props.errorMessage!}</span>
    </div>
  )
}