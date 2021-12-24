import type { NextPage } from 'next'
import PokemonDetail from '../../src/containers/PokemonDetail'

const Detail: NextPage = () => (
  <PokemonDetail/>
)

Detail.getInitialProps = async ({ query }) => {
  const name = query ? query.name : ""
  return { name }
}

export default Detail


