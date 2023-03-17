import styles  from '../cart.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@shared/button-icon';
import { NavBar } from '@shared/nav-bar';
export const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
    </div>
  )
}