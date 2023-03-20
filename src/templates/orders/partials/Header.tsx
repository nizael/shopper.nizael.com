'use client'
import styles from '../orders.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Headline1 } from '@components/shared/text';
export const Header = () => {
  const back = useRouter().back
  return (
    <div className={styles.header}>
      <NavBar startButton={<ButtonIcon onClick={back} icon={<MdOutlineArrowBackIos size={24} />} />} andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
      <Headline1>Minhas compras</Headline1>
      
    </div>
  )
}