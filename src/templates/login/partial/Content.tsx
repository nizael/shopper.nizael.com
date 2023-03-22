'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { Input } from '@components/shared/input'
import { DescriptiveItems } from '@components/shared/text'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import styles from '../login.module.css'
export const Content = () => {
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  useMemo(() => {
    console.log(valueName)
    console.log(valueEmail)
    console.log(valuePassword)
    setValueEmail(valueEmail)
  }, [valueEmail, valueName, valuePassword])
  return (
    <div className={styles.content}>
      <form action="" className={styles.form}>
        <div className={styles.frameIpt}>
          <Input value={valueEmail} label='Email' type='email' onChange={setValueEmail} />
          <Input value={valuePassword} label='Senha' type='password' onChange={setValuePassword} />
        </div>
        <div className={styles.frameBtn}>
          <Link href='/forgot-password' className={styles.link}>
            <DescriptiveItems>Esqueceu sua senha?</DescriptiveItems>
            <BiRightArrowAlt size={24} fill='var(--cl-error)' />
          </Link>
          <ButtonPrimary label='Login' />
        </div>
      </form>
      <div className={styles.socialAccount}>
        <DescriptiveItems>Ou faça login com conta social</DescriptiveItems>
        <div className={styles.frameSa}>
          <ButtonIcon variant='light' icon={<BsGoogle size={24} />} />
          <ButtonIcon variant='light' icon={<FaFacebookF size={24} />} />
        </div>
      </div>
    </div>
  )
}