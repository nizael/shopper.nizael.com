import { DescriptionText } from '@components/shared/text'
import { useState } from 'react'
import { MdDone } from 'react-icons/md'
import styles from './checkbox.module.css'

interface Checkbox {
  onChange?(): void
  onClick?(): void
  label?: string
}

type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Checkbox = (props: Checkbox & Omit<Div, 'onChange'>) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkboxProps = { ...props }
  const keysCheckbox: (keyof Checkbox)[] = ['onChange', 'onClick']
  for (const att in keysCheckbox) {
    delete checkboxProps[keysCheckbox[att]]
  }

  function handleClick() {
    if (props.onChange) {
      props.onChange()
    }

    if (props.onClick) {
      props.onClick()
    }

    setIsChecked(state => !state)
    return isChecked
  }

  return (
    <div
      onClick={handleClick}
      className={styles.checkbox}
    >
      <div
        {...checkboxProps}
        className={`${styles.default} ${styles[isChecked ? 'checked' : 'unchecked']}`}>
        <MdDone />
      </div>
      <DescriptionText>{props.label}</DescriptionText>
    </div>
  )
}