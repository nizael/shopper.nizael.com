export interface IUser {
  firstName: string
  lastName: string
  email: string
  nickname: string
  phone: string
  password: string
}
export interface IUseSignUpStore {
  user: IUser
  editUser(data: Partial<IUser>): void
}