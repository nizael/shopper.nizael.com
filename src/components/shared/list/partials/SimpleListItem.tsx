import { PropsWithChildren } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styles from '../list.module.css'
interface SimpleListItem {
  children?: JSX.Element | string
  onClick?(): void
}
type Li = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const SimpleListItem = (props: SimpleListItem & Omit<Li, 'onClick'>) => {

  const liProps = { ...props }
  const keysLiProps: (keyof SimpleListItem)[] = ['children', 'onClick']

  for (const att in keysLiProps) {
    delete liProps[keysLiProps[att]]
  }

  return (
    <li
      className={styles.listItem}
      {...liProps}
    >
      {props.children}
      <MdOutlineArrowForwardIos/>
    </li>
  )
}