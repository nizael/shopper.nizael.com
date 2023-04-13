import { create } from "zustand";
import { IUseSignUpStore } from "../types";

export const useSignUpStore = create<IUseSignUpStore>((set, get) => ({
  firstName: '',
  lastName: '',
  email: '',
  nickname: '',
  phone: '',
  password: ''
}))