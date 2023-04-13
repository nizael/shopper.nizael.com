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
import { useSignUpStore } from '../store'
export const Content = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUpStore = useSignUpStore()

  useEffect(() => {
    signUpStore.firstName = firstName
    signUpStore.lastName = lastName
    signUpStore.nickname = nickname
    signUpStore.phone = phone
    signUpStore.email = email
    signUpStore.password = password
  }, [email, firstName, lastName, nickname, password, phone, signUpStore])
console.log('render')
  return (
    <div className={styles.content}>
      {/* <form action="" className={styles.form}> */}
        <div className={styles.frameIpt}>
          <Input value={firstName} label='Nome' onChange={setFirstName} />
          <Input value={lastName} label='Sobrenome' onChange={setLastName} />
          <Input value={nickname} label='Usuário' onChange={setNickname} />
          <Input value={phone} label='Telefone' type='tel' onChange={setPhone} />
          <Input value={email} label='Email' type='email' onChange={setEmail} />
          <Input value={password} label='Senha' type='password' onChange={setPassword} />
        </div>
        
        <div className={styles.frameBtn}>
          <Link href='/login' className={styles.link}>
            <DescriptiveItems>Já tem uma conta?</DescriptiveItems>
            <BiRightArrowAlt size={24} fill='var(--cl-error)' />
          </Link>
          <ButtonPrimary label='Cadastrar-se' />
        </div>
      {/* </form> */}
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