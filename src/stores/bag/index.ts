import { create } from "zustand"

interface UseBagStore {
  products: Product[]
}

interface Product {
  id: number
  name: string
  color: string
  size: string
  price: number
  imageOfEach: string
  quantity: number
}

const products = [
  {
    id: 12345,
    name: 'Camisa manga longa',
    color: 'Preto',
    size: 'G',
    price: 9.90,
    quantity: 3,
    imageOfEach: 'https://www.wefashiontrends.com/wp-content/uploads/2020/02/roupas-basicas-e-fashion.jpg',
  },
  {
    id: 12345,
    name: 'Calça Jeans',
    color: 'Azul',
    size: 'G',
    price: 19.90,
    quantity: 2,
    imageOfEach: 'https://pitbulljeans.com.br/media/catalog/product/cache/0/image/800x1067/9df78eab33525d08d6e5fb8d27136e95/5/9/59468_4_.jpg',

  },
  {
    id: 12345,
    name: 'Sapato',
    color: 'Preto',
    size: '37',
    price: 29.90,
    quantity: 3,
    imageOfEach: 'https://images.tcdn.com.br/img/img_prod/722337/sapato_feminino_couro_verniz_usaflex_confortavel_ah0610_5335485_1_142621f45972e8b3b70a5a7eda355ad4.jpg',

  }
]

export const useBagStore = create<UseBagStore>((set, get) => (
  {
    products: products
  }
))

