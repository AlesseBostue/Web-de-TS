export interface Filters {
  name: string
  minTrophies: number
  maxTrophies: number | null
  minRequiredTrophies: number
  maxRequiredTrophies: number
  minMembers: number
  maxMembers: number
  type: 'all' | 'open' | 'inviteOnly' | 'closed'
}