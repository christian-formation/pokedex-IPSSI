import { SearchIcon} from '@heroicons/react/outline'
import { useContext } from 'react'
import MainContext from '../context'


const PokemonSearch = ()=>{
    interface context {
        [SearchInPokemonList: string]: any
    }

    const {SearchInPokemonList}:context = useContext(MainContext)

    return (
        <div className="h-25 bg-gray-300 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="flex">
                    <div className="w-full p-3">
                        <div className="relative"> 
                        <SearchIcon className="absolute w-5 text-gray-500 top-5 left-4"/>
                        <input type="text" className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" onKeyPress={SearchInPokemonList} name=""/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonSearch