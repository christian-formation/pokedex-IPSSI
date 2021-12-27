import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Loading from '../components/Loading'
import PokemonSearch from '../components/PokemonSearch'
import PokemonItemFavoris from "../components/PokemonItemFavoris"

const FavorisPokemon = ()=> {
//Utile pour récuperer l'id de chaque pokemon via la dimension url
const split = (url:string)=>{
    let id = url.split("/")
    return id[6]
  }
 
    interface Object {
        [pokemon: string]: any
    }

    let stock = JSON.parse(localStorage.getItem("pokedex") || '[]');
    let notFound = stock =="[]"?true:false
    const loading = false

    return (
        <div>
          <Head>
              <title className={styles.title}>Welcome to the Ipssi Pokedex</title>
              <meta name="description" content="Student pokedex project" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <PokemonSearch></PokemonSearch>
          <div className="bg-white">  
              {loading && !notFound?<div className="flex justify-center"><Loading/></div> : ""}
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> 
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              
              {!loading || !notFound?stock.map((pokemon:Object,index:number) => <PokemonItemFavoris key={index} slug={pokemon.name} name={pokemon.name} imageAlt={pokemon.name} imageSrc={split(pokemon.url)}></PokemonItemFavoris>)
              :<div>Pokemon not found</div>
              }
              </div>
            </div>
          </div>
        </div>
      )
}

export default FavorisPokemon