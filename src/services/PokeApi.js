import axios from 'axios'

const PokeApi = {

//Route pour récupérer les 250 premier pokemon 
async AllPokemon(){
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=250&offset=0')
        .then((data)=>{
          return data;
        })
        return response.data.results

    } catch (error) {
        console.log(error)
    }
},

//Route pour récupérer un pokemon par son url 
async PokemonByUrl(url){
    try {
        let response = await axios.get(url)
        .then((data)=>{
          return data;
        })
        return response.data

    } catch (error) {
        console.log(error)
    }
},

//Route pour récupérer tout les types
async AllType(){
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/type')
        .then((data)=>{
          return data;
        })
        return response.data.results

    } catch (error) {
        console.log(error)
    }
},


}

export default PokeApi