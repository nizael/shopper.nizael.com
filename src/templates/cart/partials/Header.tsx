import styles from '../cart.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { Headline1 } from '@components/shared/text';

export const Header = () => {

  return (
    <div className={styles.header}>
      <NavBar andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
      <Headline1>Minha sacola</Headline1>

    </div>
  )
}