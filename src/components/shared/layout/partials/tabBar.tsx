"use client"
import { Button } from './Button';
import styles from '../layout.module.css'
import { BiCategory, BiUser, BiHome, BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';

export const TabBar = () => {

  const pathname = usePathname().split('/')[1]

  const push = useRouter().push
  function redirect(path: string) {
    push(path)
  }
  return (
    <nav className={styles.tabBar}>
      <Button onClick={() => redirect('/')} value='home' label='Home' icon={<BiHome size={24} />} isActive={pathname === ''} />
      <Button onClick={() => redirect('/category')} label='Categorias' icon={<BiCategory size={24} />} isActive={pathname === 'category'} />
      <Button onClick={() => redirect('/cart')} label='Sacola' icon={<BiShoppingBag size={24} />} isActive={pathname === 'cart'} />
      <Button onClick={() => redirect('/favorite')} label='Favoritos' icon={<MdFavoriteBorder size={24} />} isActive={pathname === 'favorite'} />
      <Button onClick={() => redirect('/profile')} label='Perfil' icon={<BiUser size={24} />} isActive={pathname === 'profile'} />
    </nav>
  )
}