import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { useRouter } from 'next/router'
import MainContext from '../context'
import { useContext,useEffect,useState} from 'react'
import PokeApi from '../services/PokeApi'
import Image from 'next/image'
import Loading from '../components/Loading'

const PokemonDetail = ()=> {

    // const Post = () => {
        // const router = useRouter()
        // const { name } = router.query
        // console.log("query",router.query)

        // interface context {
        //     [pokedex: string]: any
        // }

        // interface ObjectEl {
        //     name: any;
        //     url: any;
        // }
        
        // const elementDetailPokemon = {
        //     name: "bulbasaur",
        //     url: "https://pokeapi.co/api/v2/pokemon/1/"
        // }

        const [weight,setWeight] = useState(0)
        const [name,setName] = useState("")
        const [id,setId] = useState()
        const [height,setHeight] = useState(0)
        const [type,setType] = useState([])
        const [capacite,setCapacite] = useState([])
        const [stat,setStat] = useState([])
        // const router = useRouter()

        interface context {
            [pokedex: string]: any
        }
        const {pokedex}:context= useContext(MainContext) 
        // const {fullPokemon}:context= useContext(MainContext) 
        const router = useRouter()

        // eslint-disable-next-line react-hooks/exhaustive-deps
        // const OnePokemon = async()=>{ 
            
        //     const { name } = router.query
        //     console.log("query",router.query)
        //     console.log("router",router)

        //     // interface context {
        //     //     [pokedex: string]: any
        //     // }

        //     // const {pokedex}:context= useContext(MainContext)
        //     console.log("pokedex",pokedex)
            
        //     // const elementDetailPokemon = pokedex.find((element: { name: string | string[] | undefined })=>element.name== name) 
        //     let elementDetailPokemon = []
        //     let pokedexUrl: any[] = []
        //     if(pokedex.length==0){
        //         pokedexUrl = await PokeApi.AllPokemon()
        //     console.log("pokedexUrl",pokedexUrl)
        //     }
            

        //     pokedex.length>0? elementDetailPokemon = pokedex.find((element: { name: string | string[] | undefined })=>element.name== name) :
        //     elementDetailPokemon = pokedexUrl.find((element: { name: string | string[] | undefined })=>element.name== name)

        //     const url = elementDetailPokemon.url
        //     const data = await PokeApi.PokemonByUrl(url)
        //     console.log("OnePokemeon",data)    
        
            
        //     // setWeight(data.weight)
        //     setName(data.name)
        //     setId(data.id)
        //     // setHeight(data.height)
        //     setType(data.type)
        //     setStat(data.stats)
        //     // setCapacite(data.abilities)
        // }
        // OnePokemon()
        useEffect(()=>{
            const OnePokemon = async()=>{ 
            
                const { name } = router.query
                console.log("query",router.query)
                console.log("router",router)
    
                // interface context {
                //     [pokedex: string]: any
                // }
    
                // const {pokedex}:context= useContext(MainContext)
                console.log("pokedex",pokedex)
                
                // const elementDetailPokemon = pokedex.find((element: { name: string | string[] | undefined })=>element.name== name) 
                let elementDetailPokemon = []
                let pokedexUrl: any[] = []
                if(pokedex.length==0){
                    pokedexUrl = await PokeApi.AllPokemon()
                console.log("pokedexUrl",pokedexUrl)
                }
                
    
                pokedex.length>0? elementDetailPokemon = pokedex.find((element: { name: string | string[] | undefined })=>element.name== name) :
                elementDetailPokemon = pokedexUrl.find((element: { name: string | string[] | undefined })=>element.name== name)
    
                const url = elementDetailPokemon.url
                const data = await PokeApi.PokemonByUrl(url)
                console.log("OnePokemeon",data)    
            
                
                setWeight(data.weight)
                setName(data.name)
                setId(data.id)
                setHeight(data.height)
                setType(data.types)
                setStat(data.stats)
                setCapacite(data.abilities)

            }
            OnePokemon()
        
        },[pokedex, router])

     return(
         
         <div>
            <Head>
                <title className={styles.title}>{`Welcome to the Ipssi Pokedex - ${name}`}</title>
                <meta name="description" content="Student pokedex project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-4">
                    
                    <div className="p-2 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <div className="w-auto h-96 relative">
                            {!id?<Loading/>:
                            <Image
                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+id+".svg"}
                            alt={name}
                            layout="fill"
                            priority
                            />}
                        </div>
                    </div>
                    
                    <div className="flex flex-col align-top w-full h-fit border rounded-lg">
                        <div className="w-full h-16 rounded-tr-lg rounded-tl-lg bg-gray-500 text-3xl text-white flex justify-center"><span className="h-fit align-middle">{name}</span></div>
                        
                        <div>
                        {/* test */}
                            <table className="w-full h-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <th className="w-20 bg-gray-100 h-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type:</th>
                                        <td className="px-1 py-3 text-left">
                                        {
                                        
                                        type.map((element,index)=>(<span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-gray-200 last:mr-0 mr-1">{element['type']['name']}</span>))
                                        
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="w-20 bg-gray-100 h-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight:</th>
                                        <td className="px-1 py-3 text-left">{weight}</td>
                                    </tr>
                                    <tr>
                                        <th className="w-20 bg-gray-100 h-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height:</th>
                                        <td className="px-1 py-3 text-left">{height}</td>
                                    </tr>
                                    <tr>
                                        <th className="w-20 bg-gray-100 h-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abilities:</th>
                                        <td className="px-1 py-3 text-left">
                                        {
                                        capacite.map((element,index)=>{ if(index<3) {return (<span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-gray-200 last:mr-0 mr-1">{element['ability']['name']}</span>)} })
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="w-20 bg-gray-100 h-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-bl-lg">Stats:</th>
                                        <td className="px-1 py-3 text-left">
                                        {
                                        
                                        stat.map((element,index)=>(<span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-gray-200 last:mr-0 m-1 ">{element['stat']['name']} : {element['base_stat']}</span>))
                                        
                                        }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        {/* test */}
                        </div>

                    </div>
                </div>
            </div>
         </div>
     )
}

export default PokemonDetail