import styles from '../product.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { Headline1 } from '@components/shared/text';
import { BsShareFill } from 'react-icons/bs';
export const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar andButton={<ButtonIcon icon={<BsShareFill size={24} />} />} />
      <Headline1>product</Headline1>
    </div>
  )
}