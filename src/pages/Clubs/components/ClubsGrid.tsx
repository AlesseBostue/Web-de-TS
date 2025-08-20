import { useClubs } from '@/hooks/useClubs'
import Club from '@/components/cards/Club'
import type { Club as ClubType } from '@/types/brawl'
import type { Filters } from '@/pages/Clubs/types/filters'

interface ClubsGridProps {
  filters: Filters
}

export default function ClubsGrid({ filters }: ClubsGridProps) {
  const { clubs, loading, error } = useClubs({ filters })

  return (
    <section className="px-4 md:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Nuestros Clubes</h2>

      {loading && <p className="p-4 text-subtitle">Cargando clubes...</p>}
      {error && <p className="p-4 text-error font-medium">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clubs.map((club: ClubType) => (
            <Club club={club} />
          ))}
        </div>
      )}
    </section>
  )
}