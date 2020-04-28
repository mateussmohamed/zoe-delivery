import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Detail from '../../components/ProductDetail'

type MatchParams = {
  id: string
  name: string
}
type IProps = {} & RouteComponentProps<MatchParams>

const ProductDetail: FC<IProps> = ({ match, history }) => {
  return (
    <div>
      <h1>Product</h1>
      <button
        onClick={() => {
          history.goBack()
        }}>
        voltar
      </button>
      <br />
      <br />
      <Detail id={match.params.id} name={match.params.name} />
    </div>
  )
}

export default ProductDetail
