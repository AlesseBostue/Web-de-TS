import type { Filters } from '@/pages/Clubs/types/filters'

interface ClubFiltersProps {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export default function ClubFilters({ filters, setFilters }: ClubFiltersProps) {
  return (
    <section>
      {/* Aquí van tus inputs y selects */}
      club filters
    </section>
  )
}