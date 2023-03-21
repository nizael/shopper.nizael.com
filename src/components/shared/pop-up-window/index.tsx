import { HelpText } from '../text';
import { MouseEvent, PropsWithChildren } from 'react';
import styles from './popUpWindow.module.css'
interface PopUpWindow {
  onClick?(): void
  children?: PropsWithChildren
}
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const PopUpWindow = (props: PopUpWindow & Omit<Div, 'onClick'>) => {

  const divProps = { ...props }
  const keysPopUpWindow: (keyof PopUpWindow)[] = ['onClick', 'children']
  for (const att in keysPopUpWindow) {
    delete divProps[keysPopUpWindow[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <div
      className={styles.popUpWindow}
      onClick={handleClick}
      {...divProps}
    >
      {props.children}
    </div>
  )
}


interface PopUpItem {
  onClick?(): void
  label?: string
}

type Li = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const PopUpItem = (props: PopUpItem & Li) => {
  const LiProps = { ...props }
  const keysPopUpItem: (keyof PopUpItem)[] = ['onClick', 'label']
  for (const att in keysPopUpItem) {
    delete LiProps[keysPopUpItem[att]]
  }
  function handleClick(el: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    el.stopPropagation()
    if (props.onClick)
      props?.onClick()
  }

  return (
    <li
      onClick={(el) => handleClick(el)}
      className={styles.popUpItem}
      {...LiProps}
    >
      {props.label}
    </li>
  )
}