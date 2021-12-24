import { useRouter } from 'next/router'
import { createContext, useEffect, useState,ReactNode } from "react";
import PokeApi from '../services/PokeApi'

const MainContext = createContext({});

type Props = {
    children: ReactNode;
};

const Provider = ({ children }:Props) => {

    // Appel du service PokeApi et initialisation du state all pokemon
    const [pokedex, setPokedex] = useState([])
    const [loading, setLoading] = useState(true)
    //Set du pokedex et du loading
    const fullPokemon = async()=>{ const data = await PokeApi.AllPokemon()
        setPokedex(data)
        data?setLoading(false):setLoading(true)
        return data
      }
   // Equivalent componentDidUnmont on charge les pokemon dès la fin du render
   useEffect(() => {
    fullPokemon()
    },[]);
  // fullPokemon()
  return (
    <MainContext.Provider value={{ pokedex, loading}}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;