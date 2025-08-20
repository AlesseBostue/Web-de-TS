import { useState, useEffect } from 'react'
import { API_BASE_URL, API_KEY } from '@/configs'
import type { Club } from '@/types/brawl'
import type { Filters } from '@/pages/Clubs/types/filters'

interface UseClubsProps {
  filters: Filters
}

export function useClubs({ filters }: UseClubsProps) {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

useEffect(() => {
  setLoading(true)
  fetch(`${API_BASE_URL}/clubes`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Error al cargar los clubes')
      return res.json()
    })
    .then(data => {
      let filtered = data.data || []

      // Filtrar por nombre
      if (filters.name) {
        filtered = filtered.filter((c: Club) =>
          c.name.toLowerCase().includes(filters.name.toLowerCase())
        )
      }

      // Filtrar por trofeos
      filtered = filtered.filter((c: Club) =>
        c.trophies >= filters.minTrophies &&
        (filters.maxTrophies ? c.trophies <= filters.maxTrophies : true)
      )

      // Filtrar por trofeos requeridos
      filtered = filtered.filter((c: Club) =>
        c.requiredTrophies >= filters.minRequiredTrophies &&
        c.requiredTrophies <= filters.maxRequiredTrophies
      )

      // Filtrar por miembros
      filtered = filtered.filter((c: Club) =>
        c.members.length >= filters.minMembers &&
        c.members.length <= filters.maxMembers
      )

      // Filtrar por tipo
      if (filters.type !== 'all') {
        filtered = filtered.filter((c: Club) => c.type === filters.type)
      }

      setClubs(filtered)
    })
    .catch(err => setError(err.message))
    .finally(() => setLoading(false))
}, [filters])

  return { clubs, loading, error }
}