export interface IProduct {
  id: number
  barCode: string
  qrCode: string
  name: string
  description: string
  brand: string
  isFeatured: boolean
  variants: boolean
  active: boolean
  created_at: string
  updated_at: string | null
  categoryId: numbernumber
  Sku: ISkuBySize
  category: ICategory
  subcategory: ISubcategory
}

export interface ICategory {
  id: number
  name: string,
  active: boolean,
  created_at: string
  updated_at: string | null
}

export interface ISubcategory {
  id: number
  name: string
  active: boolean,
  created_at: string
  updated_at: string | null,
  categoryId: number
}

export interface ISku {
  id: string
  color: string
  size: string
  presentationImageURL: string
  stock: number
  discountPercentage: number
  costPrice: number
  salePrice: number
  isMain: boolean
  isDiscounted: boolean
  active: boolean
  created_at: string
  updated_at: string | null
  imagesURLs: string[]
  variants: string[]
  productId: number
}

export interface UseProductStore {
  product: IProduct | null
  skuGroupBySize: ISkuBySize | null
  len: number
}

export interface ISkuBySize {
  [size: string]: ISku[]
}
