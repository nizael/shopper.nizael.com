'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { Input } from '@components/shared/input'
import { DescriptionText, DescriptiveItems } from '@components/shared/text'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import styles from '../forgotPassword.module.css'
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
          <DescriptionText>Por favor, indique o seu endereço de e-mail. Você receberá um link para criar uma nova senha por e-mail.</DescriptionText>
          <Input value={valueEmail} label='Email' type='email' onChange={setValueEmail} />
        </div>
        <div className={styles.frameBtn}>
          <ButtonPrimary label='Enviar' />
        </div>
      </form>

    </div>
  )
}