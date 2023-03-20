import { create } from 'zustand'

interface UseOrdersStore {
  orders: Order[]
}

interface Order {
  id: number
  created_at: string
  tracking: string
  quantity: number
  amount: number
  status: string
}

const orders = [
  {
    id: 123456781,
    created_at: '19/03/203',
    tracking: 'BR12345671',
    quantity: 3,
    amount: 112,
    status: 'delivered'
  },
  {
    id: 123456782,
    created_at: '18/03/203',
    tracking: 'BR12345672',
    quantity: 3,
    amount: 112,
    status: 'processing'
  },
  {
    id: 123456783,
    created_at: '17/03/203',
    tracking: 'BR12345673',
    quantity: 3,
    amount: 112,
    status: 'cancelled'
  },
  {
    id: 123456781,
    created_at: '19/03/203',
    tracking: 'BR12345671',
    quantity: 3,
    amount: 112,
    status: 'delivered'
  },
  {
    id: 123456782,
    created_at: '18/03/203',
    tracking: 'BR12345672',
    quantity: 3,
    amount: 112,
    status: 'processing'
  },

  {
    id: 123456781,
    created_at: '19/03/203',
    tracking: 'BR12345671',
    quantity: 3,
    amount: 112,
    status: 'delivered'
  },

  {
    id: 123456781,
    created_at: '19/03/203',
    tracking: 'BR12345671',
    quantity: 3,
    amount: 112,
    status: 'delivered'
  },


  {
    id: 123456781,
    created_at: '19/03/203',
    tracking: 'BR12345671',
    quantity: 3,
    amount: 112,
    status: 'delivered'
  },


]
export const useOrdersStore = create<UseOrdersStore>((set, get) => (
  {
    orders: orders
  }
))

