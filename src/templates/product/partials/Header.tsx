'use client'
import styles from '../product.module.css'
import { ButtonIcon } from '@components/buttons/button-icon';
import { NavBar } from '@components/shared/nav-bar';
import { Headline1 } from '@components/shared/text';
import { BsShareFill } from 'react-icons/bs';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useRouter } from 'next/navigation';
export const Header = () => {
  const back = useRouter().back
  return (
    <div className={styles.header}>
      <NavBar startButton={<ButtonIcon onClick={back} icon={<MdOutlineArrowBackIos size={24} />} />} headline='product' andButton={<ButtonIcon icon={<BsShareFill size={24} />} />} />
    </div>
  )
}