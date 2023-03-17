'use client'
import { Headline2 } from '@shared/text'
import Image from 'next/image'
import { disconnect } from 'process'
import { PropsWithChildren } from 'react'
import styles from '../category.module.css'
interface CardCategory {
  onClick?(): void
  headline: string
  urlImg?: string
}
type Div = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CardCategory = (props: CardCategory & Omit<Div, 'onClick'>) => {
  const divProps = { ...props }
  const keysCardCategory: (keyof CardCategory)[] = ['onClick', 'headline', 'urlImg']
  for (const att in keysCardCategory) {
    delete divProps[keysCardCategory[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={styles.cardCategory}
      {...divProps}
    >
      <Headline2>
        {props.headline}
      </Headline2>

      <img src={props.urlImg}
        alt="category" width={172} height={100} />
    </div>
  )
}

interface CardPromotion {
  onClick?(): void
  children?: PropsWithChildren
}
export const CardPromotion = (props: CardPromotion & Omit<Div, 'onClick'>) => {
  const divProps = { ...props }
  const keysCardPromotion: (keyof CardPromotion)[] = ['onClick', 'children']
  for (const att in keysCardPromotion) {
    delete divProps[keysCardPromotion[att]]
  }

  function handleClick() {
    if (props.onClick)
      props?.onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={styles.cardPromotion}
      {...divProps}
    >
      {props.children}
    </div>
  )
}