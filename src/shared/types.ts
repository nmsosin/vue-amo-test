// common types
export interface Column {
  key: string,
  name: string,
  budget: number,
  statusName: string,
  tagColor: string,
  bailee: string,
  createDt: string,
  contacts: Contact,
}

export interface Contact {
  name: string,
  email: string,
  phone: string,
}