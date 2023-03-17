'use client'
// import styles  from '../category.module.css'
import { BiSearch } from "react-icons/bi";
import { ButtonIcon } from '@shared/button-icon';
import { NavBar } from '@shared/nav-bar';
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useRouter } from "next/navigation";

export const Header = () => {
  const back = useRouter().back
  return(
  <NavBar
    startButton={<ButtonIcon onClick={back} icon={<MdOutlineArrowBackIos size={24} />} />}
    headline={''}
    andButton={<ButtonIcon icon={<BiSearch size={24} />} />}
  />)}