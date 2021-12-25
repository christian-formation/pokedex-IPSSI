import type { NextPage } from 'next'
import PokemonList from '../src/containers/PokemonList'

const Home: NextPage = () => (
  <PokemonList/>
)

Home.getInitialProps = async ({ query  }) => {
  const search = query? query.search : ""
  return  {search} 
}

export default Home
