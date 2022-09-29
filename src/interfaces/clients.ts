export interface ClientsData {
  id?: number
  socialReason: string
  document: string
  phoneNumber: string
  address: string
  number: string
  complements: string
  city: string
  state: string
  country?: string
  orders?: Array<any>
}
