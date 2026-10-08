
import { useSearchParams } from 'react-router-dom'

import { SearchResults } from '../components/home/SearchResults'

import { useAttractionsGroq } from '../hooks/useAttractionsGroq'
import { useCitiesGroq } from '../hooks/useCitiesGroq'
import { useCountriesGroq } from '../hooks/useCountriesGroq'

export function SearchPage() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''

  const countries = useCountriesGroq()
  const cities = useCitiesGroq()
  const places = useAttractionsGroq()

  return (
    <main>
      <SearchResults
        query={query}
        countries={countries.data ?? []}
        cities={cities.data ?? []}
        places={places.data ?? []}
      />
    </main>
  )
}
