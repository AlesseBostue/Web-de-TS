export interface Club {
  name: string
  iconURL: string
  description?: string
  trophies: number
  type: 'abierto' | 'cerrado'
}

export type Variant = 'compact' | 'expandable'