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
    console.log("router length",Object.keys(router.query).length)
    if(Object.keys(router.query).length==0){ 
      fullPokemon()
    }
    },[router]);
  
  // Environement de filtre
  const SearchInPokemonList = async (event:{key:string,target:{value:string}} ) => {
    if (event.key === "Enter") {
      console.log("event",event["target"]["value"])
      // const data = await PokeApi.AllPokemon()
      console.log("data",pokedex)
      const found = pokedex.find((element:{ name: string })=>element.name.toUpperCase()==event["target"]["value"].toUpperCase())
      // const found = data.find((element:{ name: string | string[] | undefined })=>element.name==event["target"]["value"])
      let filtered:any = [] 
      if(found){
        filtered.push(found)
      }
      console.log("filtered",filtered)
      setPokedex(filtered)
      filtered.length>0?setNotFound(false):setNotFound(true)
      const name = event["target"]["value"]
      router.push('?search='+name,undefined,{ shallow: true })
    }
  }

  // Set pokedex si search dans l'url
  console.log("router",router)
    useEffect(()=>{
      if(router.query.search){
      const SearchInPokemonListUrl = async()=>{
        
        const name  =typeof(router.query.search)=="string"? router.query.search.toUpperCase():""

        const data = await PokeApi.AllPokemon()
        console.log("data",data)
        const found = data.find((element:{ name: string })=>element.name.toUpperCase()==name)
        let filtered:any = [] 
        if(found){
          filtered.push(found)
        }
        console.log("filtered",filtered)
        setPokedex(filtered)
        filtered.length>0?setLoading(false):setLoading(true)
        filtered.length>0?setNotFound(false):setNotFound(true)
        }
      SearchInPokemonListUrl()
    }
    },[router])
  

  return (
    <MainContext.Provider value={{ pokedex, loading, notFound, SearchInPokemonList}}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;