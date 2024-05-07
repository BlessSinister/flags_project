import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'
import { useEffect } from 'react'
import { ALL_COUNTRIES } from './config'
import { useDispatch, useSelector } from 'react-redux'
import { allCountries } from './store/countries/countries-reducer'

function App() {
  const countries = useSelector((state) => state.allCountries)
  const searchCountry = useSelector((state) => state.searchCountry)
  const regionFilter = useSelector((state) => state.regionFilter)
  const dispatch = useDispatch()
  const allCon = async () => {
    let data = await fetch(ALL_COUNTRIES)
    data = await data.json()
    dispatch(allCountries(data))
  }
  useEffect(() => {
    allCon()
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                countries={countries}
                searchCountry={searchCountry}
                regionFilter={regionFilter}
              />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
