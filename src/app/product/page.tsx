import { Product } from "@templates/product"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function ProductPage() {
  
  return (

      <Product />
  )
}