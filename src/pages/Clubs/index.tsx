import { useState } from 'react'
import ClubFilters from '@/pages/Clubs/components/ClubFilters'
import ClubsGrid from '@/pages/Clubs/components/ClubsGrid'
import type { Filters } from '@/pages/Clubs/types/filters'

export default function Clubs() {
    const [filters, setFilters] = useState<Filters>({
        name: '',
        minTrophies: 0,
        maxTrophies: null,
        minRequiredTrophies: 0,
        maxRequiredTrophies: 100000,
        minMembers: 1,
        maxMembers: 30,
        type: 'all'
    })
    
    return (
        <>
            <ClubFilters filters={filters} setFilters={setFilters} />
            <ClubsGrid filters={filters} />
        </>
    )
}