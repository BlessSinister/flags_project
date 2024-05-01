import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentCountry } from '../store/current_countries/current-actions'

export const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const allCountries = useSelector((state) => state.allCountries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addCurrentCountry([allCountries, name]))
  }, [])
  let x = useSelector((state) => state.currentCountry)
  let currentCountry = null
  if (x.length !== 0) {
    currentCountry = x
  }

  console.log(x)
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  )
}
