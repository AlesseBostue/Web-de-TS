import type { Club, Variant } from '@/types/club'

interface ClubCardProps {
  club: Club
  variant?: Variant
}

function ClubCard({ club, variant = 'compact' }: ClubCardProps) {
  return (
    <article>
      <h3>{club.name}</h3>
      <p>{variant}</p>
    </article>
  )
}

export default ClubCard