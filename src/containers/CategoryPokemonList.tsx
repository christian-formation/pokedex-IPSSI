import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
// import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import PokeApi from '../services/PokeApi'
import MainContext from '../context'
import Link from 'next/link'


const CategoryPokemonList = ()=> {

    const [type,setType] = useState([])

    useEffect(()=>{
        const allTypePokemon = async()=>{
            const data = await PokeApi.AllType()
            setType(data)
            // console.log("type",type)
        }
        allTypePokemon()
    },[])

    const {colorType,choiceType}:any = useContext(MainContext)

    return (
        <div>
            <Head>
                <title className={styles.title}>Welcome to the Ipssi Pokedex - Categorie</title>
                <meta name="description" content="Student pokedex project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-2xl mx-auto py-10 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-4 gap-4">
                    {
                    

                    type.map(
                        (element:{name:string},index:number)=> 
                        <div className="my-2" key={index}>
                        <Link href={`/category/${element["name"]}`} passHref>
                        <button value={element["name"]} className="inline-flex text-2xl font-semibold bg-gray-200 py-1 pl-6 pr-2 uppercase rounded-full text-black last:mr-0 mr-1"> 
                            {element["name"]}
                            <span style={{backgroundColor:colorType[element.name.toUpperCase()]}} className="rounded-full block w-8 h-8 ml-4"></span>
                        </button>
                        </Link>
                        </div> 
                        )
                    
                    }
                </div>
            </div>
        </div>
      )
}

export default CategoryPokemonList