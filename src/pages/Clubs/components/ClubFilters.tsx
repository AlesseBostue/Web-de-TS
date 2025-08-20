import type { Filters } from '@/pages/Clubs/types/filters'

interface ClubFiltersProps {
  filters: Filters
  setFilters: (filters: Filters) => void
}

export default function ClubFilters({ filters, setFilters }: ClubFiltersProps) {
  return (
    <section className='mt-15'>
      <input
        className="border border-gray-300 rounded-lg p-2 w-full"
        type="text"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
    </section>
  )
}
