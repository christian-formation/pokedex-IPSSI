import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import PokemonItem from '../components/PokemonItem';
import { useEffect,useState } from 'react'
import PokeApi from '../services/PokeApi'


const PokemonList =()=> {

  const [pokedex, setPokedex] = useState([])
  const fullPokemon = async()=>{ const data = await PokeApi.AllPokemon()
    setPokedex(data)
  }

  const split = (url:string)=>{
    let id = url.split("/")
    return id[6]
  }

   useEffect(() => {
      fullPokemon()
      
      },[]);
    
      interface Object {
        [pokemon: string]: any
    }
      
    return (
        <div>
        <Head>
            <title className={styles.title}>Welcome to the Ipssi Pokedex</title>
            <meta name="description" content="Student pokedex project" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">    
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {pokedex.map((pokemon:Object,index:number) => 
                // <PokemonItem key={index} {...pokemon}></PokemonItem>
                <PokemonItem key={index} href={split(pokemon.url)} name={pokemon.name} imageAlt={pokemon.name} imageSrc={split(pokemon.url)}></PokemonItem>
              )}
            </div>
          </div>
        </div>
        </div>
      )
    // }
}

export default PokemonList