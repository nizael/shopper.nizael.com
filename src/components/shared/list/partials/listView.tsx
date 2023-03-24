'use client'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from '../list.module.css'
interface ListView {
  headline?: JSX.Element
  description?: JSX.Element
  onClick?(): void
}
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ListView = (props: ListView & Omit<Div, 'onClick'>) => {

  const divProps = { ...props }
  const keysListView: (keyof ListView)[] = [ 'onClick']
  for (const att in keysListView) {
    delete divProps[keysListView[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <div
    onClick={handleClick}
    className={styles.listView}
    {...divProps}
    >
      <div className={styles.infoItem}>
        {props.headline}
        {props.description}
      </div>
      <MdOutlineArrowForwardIos/>
    </div>
  )
}