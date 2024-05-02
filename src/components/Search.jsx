import styled from 'styled-components'

import { IoSearch } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchCountry } from '../store/search-country/actino-search'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`

export const Search = (/*{ search, setSearch }*/) => {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const state = useSelector((state) => state.allCountries)
  useEffect(() => {
    dispatch(searchCountry([state, search]))
  }, [search])
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  )
}
