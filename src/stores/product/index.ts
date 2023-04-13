import { create } from "zustand";
import { UseProductStore } from "./product";

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

