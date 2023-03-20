'use client'
import styles from '../addresses.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';
export const Header = () => {
  const back = useRouter().back
  return (

    <div className={styles.header}>
      <NavBar startButton={<ButtonIcon onClick={back} icon={<MdOutlineArrowBackIos size={24} />} />} headline={'Endereços de Envio   '} andButton={<ButtonIcon icon={<BiSearch size={24} />} />} />
    </div>
  )
}