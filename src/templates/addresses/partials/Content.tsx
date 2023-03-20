'use client'
import { DescriptiveItems, Headline2 } from '@components/shared/text'
import { useRouter } from 'next/navigation'
import styles from '../addresses.module.css'
import { CardCategory, CardPromotion } from './CardCategory'
export const Content = () => {
  const push = useRouter().push
  function handleClick(){
    push('/category/catalog/')
  }
  return (
    <div className={styles.content}>
      <CardPromotion>
        <Headline2>PROMOÇÃO</Headline2>
        <DescriptiveItems>Até 50% de desconto</DescriptiveItems>
      </CardPromotion>
      <CardCategory onClick={handleClick} headline='Novidades' urlImg='https://img.freepik.com/fotos-gratis/loja-de-roupas-loja-de-roupas-em-cabide-na-boutique-loja-moderna_1150-8886.jpg'  />
      <CardCategory headline='Roupas' urlImg='https://www.offpremium.com.br/static/ade4e094f3f7f78b04b9705ab2edb9b2/5af6b/dd417e85-5379-4877-86bf-b92718de1184_25_banner_landing_categorias_masculino_mob.jpg' />
      <CardCategory headline='Sapatos' urlImg='https://blog.lojafreeway.com.br/wp-content/uploads/sapatenis_100_couro.jpg' />
      <CardCategory headline='Acessórios' urlImg='https://blog.mensmarket.com.br/wp-content/uploads/2020/10/acessorios-para-homens-estilosos-e1604493225737-730x386.jpg' />
    </div>
  )
}