'use client'
import { CardModuleCatalog } from "@components/cards/card-module-catalog"
import { Headline2, HelpText } from "@components/shared/text"
// import Image from "next/image"
import styles from '../home.module.css'
import { UseHomeStore } from "@stores/home"
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { Apis } from "../../../shared/services/apis"
import { Loading } from "../../../shared/components/loading"

export const Content = () => {
  const redirect = useRouter().push
  const banner = {
    img: 'smallBanner.png',
    label: 'Roupas de rua'
  }
  const products = UseHomeStore(s => s.products)

  function redirectToCatalog() {
    redirect('/catalog')
  }
  function redirectToProduct() {
    redirect('/product')
  }

  const token = parseCookies()['token']
  const [isloads, setIsLoads] = useState(true)

  useEffect(() => {
    if (!token) redirect('/login')
    Apis.post('/sessions/auth').then(auth => {
      if (!auth.data.authenticated) {
        redirect('/login')
      } else {
        setIsLoads(false)
      }
    })
  }, [redirect, token])
  return (
    !isloads ? (
      <div className={styles.content} >

        <div className={styles.smallBanner}>
          <img alt="smallBanner" src={`/img/${banner.img}`} />
          <Headline2>{banner.label}</Headline2>
        </div>

        <div className={styles.sale}>
          <div className={styles.headeline}>
            <div className={styles.frameH}>
              <Headline2>Ofertas</Headline2>
              <HelpText>Super liquidação </HelpText>
            </div>
            <HelpText onClick={redirectToCatalog} style={{ color: 'var(--cl-dark-primary)' }}>Ver todos</HelpText>
          </div>
          <div className={styles.frameS}>
            {products.map((product, index) => <CardModuleCatalog onClick={() => redirectToProduct()} key={index} data={product} />)}
          </div>
        </div>

        <div className={styles.new}>
          <div className={styles.headeline}>
            <div className={styles.frameH}>
              <Headline2>Novidades</Headline2>
              <HelpText>Você nunca viu isso antes!</HelpText>
            </div>
            <HelpText onClick={redirectToCatalog} style={{ color: 'var(--cl-dark-primary)' }}>Ver todos</HelpText>
          </div>
          <div className={styles.frameN}>
            {products.map((product, index) => <CardModuleCatalog onClick={() => redirectToProduct()} key={index} data={product} />)}
          </div>
        </div>

        <div className={styles.lastViews}>
          <Headline2>Últimas visualizações</Headline2>
          <div className={styles.headeline}>

          </div>
          <div className={styles.frameLv}>
            {products.map((product, index) => <CardModuleCatalog onClick={() => redirectToProduct()} key={index} data={product} />)}
          </div>
          <HelpText onClick={redirectToCatalog} style={{ color: 'var(--cl-dark-primary)' }}>Ver todos</HelpText>
        </div>

      </div>) : (<Loading />)
  )
}