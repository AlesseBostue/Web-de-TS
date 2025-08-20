export interface Member {
  tag: string
  name: string
  trophies: number
  highestTrophies: number
  role: 'member' | 'vicePresident' | 'president'
  icon: { id: number }
}

export interface Club {
  tag: string
  name: string
  description: string
  trophies: number
  requiredTrophies: number
  members: Member[]
  type: 'open' | 'inviteOnly' | 'closed' | 'unknown'
  badgeId: number
}