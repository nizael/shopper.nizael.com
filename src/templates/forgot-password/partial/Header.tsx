'use client'
import styles from '../forgotPassword.module.css'
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Headline1 } from '@components/shared/text';
export const Header = () => {
  const back = useRouter().back
  return (

    <div className={styles.header}>
      <NavBar startButton={<ButtonIcon onClick={back} icon={<MdOutlineArrowBackIos size={24} />} />} />
      <Headline1>Recuperar senha</Headline1>
    </div>
  )
}