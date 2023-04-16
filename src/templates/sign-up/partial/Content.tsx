'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { Input } from '@components/shared/input'
import { DescriptiveItems } from '@components/shared/text'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import styles from '../signUp.module.css'
import { Apis } from '../../../shared/services/apis'
import { useRouter } from 'next/navigation'

export const Content = () => {
  const redirect = useRouter().push
  const [formValues, setFormValues] = useState(
    { firstName: '', lastName: '', nickname: '', phone: '', email: '', password: '' }
  )

  function handleChange(key: string, value: string) {
    setFormValues({ ...formValues, [key]: value })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await Apis.post('/users/register', formValues)
      redirect('/login')
      console.log('ok')

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.content}>
      <form
        className={styles.form}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className={styles.frameIpt}>
          <Input
            value={formValues?.firstName}
            label='Nome'
            type='text'
            required
            onChange={
              (event) =>
                handleChange('firstName', event.currentTarget.value)
            }
          />
          <Input
            value={formValues.lastName}
            label='Sobrenome'
            type='text'
            required
            onChange={
              (event) =>
                handleChange('lastName', event.currentTarget.value)
            }
          />
          <Input
            value={formValues.nickname}
            label='Usuário'
            type='text'
            required
            onChange={
              (event) =>
                handleChange('nickname', event.currentTarget.value)
            }
          />
          <Input
            value={formValues.email}
            label='E-mail'
            type='email'
            required
            onChange={
              (event) =>
                handleChange('email', event.currentTarget.value)
            }
          />
          <Input
            value={formValues.phone}
            label='Telefone'
            type='tel'
            required
            onChange={
              (event) =>
                handleChange('phone', event.currentTarget.value)
            }
          />
          <Input
            value={formValues.phone}
            label='Senha'
            type='password'
            required
            onChange={
              (event) =>
                handleChange('password', event.currentTarget.value)
            }
          />
        </div>

        <div className={styles.frameBtn}>
          <Link href='/login' className={styles.link}>
            <DescriptiveItems>Já tem uma conta?</DescriptiveItems>
            <BiRightArrowAlt size={24} fill='var(--cl-error)' />
          </Link>
          <ButtonPrimary type='submit' label='Cadastrar-se' />
        </div>
      </form>
      <div className={styles.socialAccount}>
        <DescriptiveItems>Ou inscreva-se com conta social</DescriptiveItems>
        <div className={styles.frame1}>
          <ButtonIcon variant='light' icon={<BsGoogle size={24} />} />
          <ButtonIcon variant='light' icon={<FaFacebookF size={24} />} />
        </div>
      </div>
    </div >
  )
}