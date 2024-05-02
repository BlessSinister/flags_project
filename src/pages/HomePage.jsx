import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { useDispatch, useSelector } from 'react-redux'
import { ALL_COUNTRIES } from '../config'
import { addAllCountries } from '../store/countries/countries-actions'

export const HomePage = () => {
  const navigate = useNavigate()
  const countries = useSelector((state) => state.allCountries)
  const searchCountry = useSelector((state) => state.searchCountry)
  const dispatch = useDispatch()
  const allCon = async () => {
    let data = await fetch(ALL_COUNTRIES)
    data = await data.json()
    dispatch(addAllCountries(data))
  }
  useEffect(() => {
    allCon()
  }, [])

  const active = !searchCountry.length ? countries : searchCountry
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
