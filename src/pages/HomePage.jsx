import { useNavigate } from 'react-router-dom'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'

export const HomePage = ({ countries, searchCountry, regionFilter }) => {
  const navigate = useNavigate()

  let active = []
  if (regionFilter.length) {
    active = regionFilter
  } else if (searchCountry.length) {
    active = searchCountry
  } else {
    active = countries
  }

  console.log(active)
  return (
    <>
      <Controls />

      <List>
        {active.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          }

          return (
            <Card
              key={c.name.common}
              onClick={() => navigate(`/country/${c.name.common}`)}
              {...countryInfo}
            />
          )
        })}
      </List>
    </>
  )
}
