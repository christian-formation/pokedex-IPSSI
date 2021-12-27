import type { NextPage } from 'next'
import PokemonList from '../../src/containers/PokemonList'

const Category: NextPage = () => (
  <PokemonList/>
)

Category.getInitialProps = async ({ query  }) => {
  const name = query? query.categoryName : ""
  return  {name} 
}

export default Category
