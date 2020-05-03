import { gql } from 'apollo-boost'
// import { gql } from '@apollo/client'

type TPocReturn = {
  id: string
  status: string
  tradingName: string
  officialName: string
}

export type TPocSearchData = {
  pocSearch: TPocReturn[]
}

export type TPocVariables = {
  lat: string
  long: string
  algorithm: string
  now: string
}

export default gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
      tradingName
      officialName
    }
  }
`
