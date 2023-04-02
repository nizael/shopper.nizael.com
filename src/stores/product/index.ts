import { create } from "zustand";
import { IProduct, ISku } from "./product";
interface UseProductStore {
  product: IProduct | null
  skuGroupBySize: ISkuBySize | null
  len: number
}

export interface ISkuBySize {
  [size: string]: ISku[]
}

export const useProductStore = create<UseProductStore>((set, get) => (
  {
    product: null,
    skuGroupBySize: null,
    len: 0
  }
))

useProductStore.subscribe((newState) => {
  // console.log('vv')
  // useProductStore.setState({ len: newState.product?.Sku.length })
})

// useProductStore.subscribe(console.log)

