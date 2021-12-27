import { useRouter } from 'next/router'
import { createContext, useEffect, useState,ReactNode } from "react";
import PokeApi from '../services/PokeApi'

const MainContext = createContext({});

type Props = {
    children: ReactNode;
};

const Provider = ({ children }:Props) => {
  const router = useRouter()
    // Appel du service PokeApi et initialisation du state all pokemon
    const [pokedex, setPokedex] = useState([])
    const [loading, setLoading] = useState(true)
    const [notFound,setNotFound] = useState(false)
    //Set du pokedex et du loading
    const fullPokemon = async()=>{ const data = await PokeApi.AllPokemon()
        setPokedex(data)
        data?setLoading(false):setLoading(true)
        data?setNotFound(false):setNotFound(true)
        return data
      }
   // Equivalent componentDidUnmont on charge les pokemon dès la fin du render
   useEffect(() => {
    if(Object.keys(router.query).length==0){ 
      fullPokemon()
    }
    },[router]);
  
  // Environement de filtre
  const SearchInPokemonList = async (event:{key:string,target:{value:string}} ) => {
    if (event.key === "Enter") {
      const found = pokedex.find((element:{ name: string })=>element.name.toUpperCase()==event["target"]["value"].toUpperCase())
      let filtered:any = [] 
      if(found){
        filtered.push(found)
      }
      setPokedex(filtered)
      filtered.length>0?setNotFound(false):setNotFound(true)
      const name = event["target"]["value"]
      router.push('?search='+name,undefined,{ shallow: true })
    }
  }

  // Set pokedex si search dans l'url
    useEffect(()=>{
      if(router.query.search){
      const SearchInPokemonListUrl = async()=>{
        
        const name  =typeof(router.query.search)=="string"? router.query.search.toUpperCase():""

        const data = await PokeApi.AllPokemon()
        const found = data.find((element:{ name: string })=>element.name.toUpperCase()==name)
        let filtered:any = [] 
        if(found){
          filtered.push(found)
        }
        setPokedex(filtered)
        filtered.length>0?setLoading(false):setLoading(true)
        filtered.length>0?setNotFound(false):setNotFound(true)
        }
      SearchInPokemonListUrl()
    }
    },[router])
  
  // setColor type categorie
  const [colorType,setColorType] = useState({})

useEffect(()=>{
  const color = 
{
NORMAL:"#D0D0C9",
FIGHTING:"#A75543",
FLYING:"#77A2FF",
POISON:"#9A5590",
GROUND:"#E4C556",
ROCK:"#CCBC72",
BUG:"#BCCB1D",
GHOST:"#7874D5",
STEEL:"#C3C2D9",
FIRE:"#F95442",
WATER:"#58ADFF",
GRASS:"#8AD450",
ELECTRIC:"#FDE33C",
PSYCHIC:"#F361AC",
ICE:"#96F2FF",
DRAGON:"#8272FC",
DARK:"#856250",
FAIRY:"#F7ADFF",
UNKNOWN:"#FFFFFF",
SHADOW:"#000000",
}
setColorType(color)

},[])

//Environement pour récuperer le type selectioné

useEffect(()=>{
  if(router.query.categoryName){
    const name = router.query.categoryName
    const pokemonByTypeName = async ()=>{
      const data:any = await PokeApi.AllPokemonByType(name) 
      setPokedex(data)
      data?setLoading(false):setLoading(true)
      data?setNotFound(false):setNotFound(true)   
    }
    pokemonByTypeName()
  }
},[router])


//Environement pour les favoris
  const AddPokemon = (pokemon:any)=>(event:any)=>{
    let favoris = []
    event.preventDefault()
    favoris.push(pokemon)
    if(localStorage.getItem("pokedex")){
     let stock = JSON.parse(localStorage.getItem("pokedex") || '[]')
     stock.push(pokemon)
     localStorage.setItem("pokedex",JSON.stringify( stock ))
    }else{
      localStorage.setItem("pokedex",JSON.stringify(favoris))
    }
  } 

  return (
    <MainContext.Provider value={{ pokedex, loading, notFound, SearchInPokemonList, colorType,AddPokemon}}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;