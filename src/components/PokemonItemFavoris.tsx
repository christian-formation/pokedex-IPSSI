import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'


const PokemonItemFavoris = ({slug,name,imageSrc,imageAlt}:any)=>{

    const [isError,setIsError] = useState(false)
    const [src,setSrc] = useState("/404-error.svg")

    const onError= (event:any)=>{
        if(event.type=="error"){
            setIsError(true)
            setSrc("/404-error.svg")
        }
        }

    return (
        <div>
                <div className="p-2 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <div className="w-auto h-80 relative">
                        <Image
                        onError={onError}
                        src={isError?"/404-error.svg":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"}
                        alt={imageAlt}
                        layout="fill"
                        priority
                        />
                    </div>
                </div>
            <h3 className="my-2 text-sm text-gray-700 text-center">{name}</h3>
            <div className="flex  items-center justify-center" role="group" aria-label="Button group">
                <Link href={"/detail/"+slug} passHref><button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Détail</button></Link>
                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800"><TrashIcon className="h-6 w-6" aria-hidden="true" /></button>
            </div>
        </div>       
      )
}

export default PokemonItemFavoris