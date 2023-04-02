'use client'
import styles from './product.module.css'
import { Content } from "./partials/Content"
import { Header } from "./partials/Header"
import { Footer } from './partials/Footer'
import { ApiProduct } from '../../hooks/products'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '@stores/product/product'
import { useProductStore } from '@stores/product'

export const Product = () => {

  useEffect(() => {
    ApiProduct.get('/products/preview?id=1').then(response => {
      console.log(response)
      useProductStore.setState({ product: response.data })

    }).catch(error => {
      console.log(error)

    })
  }, [])

  return (
    <div className={styles.product}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}