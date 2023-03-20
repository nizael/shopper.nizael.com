"use client"
import { Button } from './Button';
import styles from '../layout.module.css'
import { BiCategory, BiUser, BiHome, BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutStore } from '@stores/layout';
import { useEffect } from 'react';

export const TabBar = () => {
  const { activatedPage, setActivatedPage } = useLayoutStore()
  const pathname = usePathname().split('/')[1]

  const push = useRouter().push

  function redirect(path: string,) {
    push(`/${path === 'home' ? '' : path}`)
  }

  useEffect(() => {
    const mainPaths = ['category', 'cart', 'favorite', 'profile']
    if (mainPaths.includes(pathname)) {
      setActivatedPage(pathname)
    } else if ((!mainPaths.includes(pathname) && !activatedPage)|| !pathname) {
      setActivatedPage('home')
    }

  }, [activatedPage, pathname, setActivatedPage])

  return (
    <nav className={styles.tabBar}>
      <Button onClick={() => redirect('home')} value='home' label='Home' icon={<BiHome size={24} />} isActive={activatedPage === 'home'} />
      <Button onClick={() => redirect('category')} label='Categorias' icon={<BiCategory size={24} />} isActive={activatedPage === 'category'} />
      <Button onClick={() => redirect('cart')} label='Sacola' icon={<BiShoppingBag size={24} />} isActive={activatedPage === 'cart'} />
      <Button onClick={() => redirect('favorite')} label='Favoritos' icon={<MdFavoriteBorder size={24} />} isActive={activatedPage === 'favorite'} />
      <Button onClick={() => redirect('profile')} label='Perfil' icon={<BiUser size={24} />} isActive={activatedPage === 'profile'} />
    </nav>
  )
}