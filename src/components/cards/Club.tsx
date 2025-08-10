import type { Club, Variant } from '@/types/club'

interface ClubCardProps {
  club: Club
  variant?: Variant
}

export default function Club({ club, variant = 'compact' }: ClubCardProps) {
  return (
    <article>
      <h3>{club.name}</h3>
      <p>{variant}</p>
    </article>
  )
}