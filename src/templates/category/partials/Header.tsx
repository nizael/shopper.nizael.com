import styles from '../category.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
export const Header = () => {
  return (

    <div className={styles.header}>
      <NavBar startButton={undefined} headline={'Categorias'} andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
    </div>
  )
}