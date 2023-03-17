import { PropsWithChildren } from "react";
import styles from '../list.module.css'
interface SimpleListItem {
  children: PropsWithChildren
  onClick?(): void
}
type Li = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
export const simpleListItem = (props: SimpleListItem & Omit<Li, 'onClick'>) => {

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
    </li>
  )
}