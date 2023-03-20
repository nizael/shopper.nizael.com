// "use client"
import styles from '../cart.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { Headline1 } from '@components/shared/text';
// import { usePathname } from 'next/navigation';
// import { useLayoutStore } from '@stores/layout';
export const Header = () => {
  // const [activatedPage, setActivatedPage] = useLayoutStore(s => [s.activatedPage, s.setActivatedPage])

  // const pathname = usePathname().split('/')[1]
  // if(pathname!== activatedPage) setActivatedPage(pathname)

  return (
    <div className={styles.header}>
      <NavBar andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
      <Headline1>Minha sacola</Headline1>

    </div>
  )
}