import { gql } from 'apollo-boost'

export default gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`
