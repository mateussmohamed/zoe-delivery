import React, { useRef, FC } from 'react'

import usePlacesAutocomplete, { getGeocode, getLatLng, Suggestion } from 'use-places-autocomplete'

import AddressInput from '../../../../components/AddressInput'

import { Container, List, Item, MainText, SecondaryText } from './styles'

const CustomerAddress: FC = () => {
  const {
    ready,
    value,
    suggestions: { status, data, loading },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 500
  })

  const ref = useRef<HTMLUListElement | null>(null)

  const handleInput = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }

  const handleSelect = ({ description }: Suggestion) => async (): Promise<void> => {
    setValue(description, false)
    clearSuggestions()

    try {
      const results = await getGeocode({ address: description })
      const coordinates = await getLatLng(results[0])
    } catch (error) {}
  }

  const renderSuggestions = (): React.ReactNode => {
    return data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion

      return (
        <Item key={id} onClick={handleSelect(suggestion)}>
          <MainText>{main_text}</MainText>
          <SecondaryText>{secondary_text}</SecondaryText>
        </Item>
      )
    })
  }

  console.log({ ready, loading, status })

  return (
    <Container ref={ref}>
      <AddressInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Onde vamos entregar suas bebidas?"
      />

      {status === 'OK' && <List>{renderSuggestions()}</List>}
    </Container>
  )
}

export default CustomerAddress
