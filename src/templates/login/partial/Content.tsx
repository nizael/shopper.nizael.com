'use client'
import { ButtonIcon } from '@components/buttons/button-icon'
import { ButtonPrimary } from '@components/buttons/button-primary'
import { Input } from '@components/shared/input'
import { DescriptiveItems } from '@components/shared/text'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import styles from '../login.module.css'
import { useRouter } from 'next/navigation'
import { Apis } from '../../../shared/services/apis'
import { setCookie } from "nookies";
export const Content = () => {
  const redirect = useRouter().push
  const [formValues, setFormValues] = useState(
    { login: '', password: '' }
  )
  function handleChange(key: string, value: string) {
    setFormValues({ ...formValues, [key]: value })
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {

      const response = await Apis.post('/sessions/create', formValues)
      console.log(response.data.token)
      setCookie({}, 'token', response.data.token)
      redirect('/')

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
            value={formValues.login}
            label='Email'
            type='text'
            onChange={(event) => handleChange('login', event.currentTarget.value)}
          />
          <Input
            value={formValues.password}
            label='Senha'
            type='password'
            onChange={(event) => handleChange('password', event.currentTarget.value)}
          />
        </div>
        <div className={styles.frameBtn}>
          <Link href='/forgot-password' className={styles.link}>
            <DescriptiveItems>Esqueceu sua senha?</DescriptiveItems>
            <BiRightArrowAlt size={24} fill='var(--cl-error)' />
          </Link>
          <ButtonPrimary type='submit' label='Login' />
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