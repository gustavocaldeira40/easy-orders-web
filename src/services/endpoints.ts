import { AxiosRequestConfig } from 'axios'
import { LoginData } from 'interfaces/login'
import { RegisterData } from 'interfaces/register'
import Cookies from 'js-cookie'
import { ClientsData } from 'interfaces/clients'
import { OrdersData } from 'interfaces/orders'
import { ChangePasswordData } from 'interfaces/change-password'
import api from './api'

export class EndPoints {
  static headerToken = async () => {
    const token = await Cookies.get('token')
    if (token) {
      const headers: AxiosRequestConfig<any> = {
        headers: { Authorization: `Bearer ${token}` },
      }
      return headers
    }
  }

  static getUserId = async () => {
    const userId = await Cookies.get('userId')
    if (userId) {
      return userId
    }
  }

  static getToken = async (id?: number) => {
    const userId = await this.getUserId()
    const { data } = await api.get(
      `auth/token/${userId || id}`,
      await this.headerToken(),
    )

    return data
  }

  static login = async (values: LoginData) => {
    const { data } = await api.post('auth/login', values)

    if (data) {
      Cookies.set('token', data?.access_token)
      Cookies.set('userId', data.user.id)
    }
    return data
  }

  static verifyNickname = async (nickname: string) => {
    const { data } = await api.post(`users/verify-nickname/${nickname}`)

    return data
  }

  static getAllUsers = async () => {
    const { data } = await api.get('users')

    return data
  }

  static getUser = async (id: number) => {
    if (id) {
      const { data } = await api.get(`/users/${id}`, await this.headerToken())

      return data
    }
  }

  static changePassword = async (id: number, values: ChangePasswordData) => {
    const { data } = await api.post(
      `users/change-password/${id}`,
      values,
      await this.headerToken(),
    )

    return data
  }

  static updateUser = async (id: number, values: any) => {
    const { data } = await api.patch(
      `users/${id}`,
      values,
      await this.headerToken(),
    )

    return data
  }

  static register = async (values: RegisterData) => {
    const { data } = await api.post('auth/register', values)
    return data
  }

  static registerClient = async (values: ClientsData) => {
    const { data } = await api.post('clients', values, await this.headerToken())

    return data
  }

  static editClient = async (id: number, values: ClientsData) => {
    const { data } = await api.patch(
      `clients/${id}`,
      values,
      await this.headerToken(),
    )

    return data
  }

  static getOneClient = async (id: number) => {
    const { data } = await api.get(`clients/${id}`, await this.headerToken())
    return data
  }

  static getClients = async (id: number) => {
    const { data } = await api.get(
      `clients/find-by-user/${id}`,
      await this.headerToken(),
    )
    return data
  }

  static removeClient = async (id: number) => {
    const { data } = await api.delete(`clients/${id}`, await this.headerToken())

    return data
  }

  static getOrders = async (id: number, status: string) => {
    const { data } = await api.post(
      `orders/find-by-user`,
      { userId: id, status },
      await this.headerToken(),
    )

    return data
  }

  static registerOrder = async (values: OrdersData) => {
    const { data } = await api.post('orders', values, await this.headerToken())

    return data
  }

  static editOrder = async (id: number, values: OrdersData) => {
    if (values?.id) {
      const { data } = await api.patch(
        `orders/${id}`,
        values,
        await this.headerToken(),
      )

      return data
    }
  }

  static removeOrder = async (id: any) => {
    const { data } = await api.delete(`orders/${id}`, await this.headerToken())

    return data
  }

  static createAvatar = async (id: number, file: any) => {
    const token = await Cookies.get('token')

    if (id && file && token) {
      const { data } = await api.post(`files/${id}`, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    }
  }

  static getAvatar = async (id: number) => {
    const { data } = await api.get(
      `files/avatar/${id}`,
      await this.headerToken(),
    )
    return data
  }

  static updateAvatar = async (fileName: number, file: any) => {
    const token = await Cookies.get('token')

    if (fileName && file && token) {
      const { data } = await api.patch(`files/${fileName}`, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      return data
    }
  }

  static removeAvatar = async (id: number) => {
    const { data } = await api.delete(`files/${id}`, await this.headerToken())
    return data
  }

  static searchByCep = async (cep: string) => {
    const { data } = await api.get(`https://viacep.com.br/ws/${cep}/json/`)

    return data
  }
}
