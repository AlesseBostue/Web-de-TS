import type { Club as   ClubType } from '@/types/brawl'

interface ClubProps {
  club: ClubType
}

export default function Club({ club }: ClubProps) {
  return (
    <article className="bg-elevated rounded-lg w-full p-4 sm:p-5 md:p-6">
      {JSON.stringify(club, null, 2)}
    </article>
  )
}