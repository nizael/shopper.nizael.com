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
import styles from '../signUp.module.css'
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
          <Input value={valueName} label='Nome' onChange={setValueName} />
          <Input value={valueEmail} label='Email' type='email' onChange={setValueEmail} />
          <Input value={valuePassword} label='Senha' type='password' onChange={setValuePassword} />
        </div>
        <div className={styles.frameBtn}>
          <Link href='/login' className={styles.link}>
            <DescriptiveItems>Já tem uma conta?</DescriptiveItems>
            <BiRightArrowAlt size={24} fill='var(--cl-error)' />
          </Link>
          <ButtonPrimary label='Cadastrar-se' />
        </div>
      </form>
      <div className={styles.socialAccount}>
        <DescriptiveItems>Ou inscreva-se com conta social</DescriptiveItems>
        <div className={styles.frame1}>
          <ButtonIcon variant='light' icon={<BsGoogle size={24} />} />
          <ButtonIcon variant='light' icon={<FaFacebookF size={24} />} />
        </div>
      </div>
    </div>
  )
}