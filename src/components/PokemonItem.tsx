import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'

const PokemonItem = ({href,name,imageSrc,imageAlt}:any)=>{
    return (
        <div>
        <a href={"#"+href} className="group">
            <div className="p-2 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <div className="w-auto h-80 relative">
                    <Image
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"}
                    alt={imageAlt}
                    // className="w-full h-full object-center object-cover group-hover:opacity-75"
                    layout="fill"
                    priority
                    // width={255}
                    // height={286}
                    />
                </div>
            </div>
        </a>
        <h3 className="my-2 text-sm text-gray-700 text-center">{name}</h3>
        <div className="flex  items-center justify-center" role="group" aria-label="Button group">
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Détail</button>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Verso</button>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800"><HeartIcon className="h-6 w-6" aria-hidden="true" /></button>
        </div>
        </div>       
      )
}

export default PokemonItem