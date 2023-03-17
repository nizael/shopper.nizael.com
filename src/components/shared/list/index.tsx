import { PropsWithChildren } from "react"
import styles from './list.module.css'
interface List {
  children: PropsWithChildren
  onClick?(): void
}
type Ul = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
export const List = (props: Ul & List) => {
  const ulProps = { ...props }
  const keysUlProps: (keyof List)[] = ['children', 'onClick']
  for (const att in keysUlProps) {
    delete ulProps[keysUlProps[att]]
  }
  return (
    <ul
      className={styles.list}
      {...ulProps}

    >
      {props.children}
    </ul>
  )
}