import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'


const PokemonItem = ({slug,name,imageSrc,imageAlt}:any)=>{

    const [isError,setIsError] = useState(false)
    const [src,setSrc] = useState("/404-error.svg")
    
    // const imgCheck = require(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`)
    // const imgCheck = require("../../public/404-error.svg")
// console.log("imgCheck",imgCheck)
    const onError= (event:any)=>{
        console.log("erro",event)
        if(event.type=="error"){
            setIsError(true)
            setSrc("/404-error.svg")
        }
        // setSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+imageSrc+".png")
        // setSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+imageSrc+".png")
        }

    // const myLoader= ({ src, width, quality }:any)=>{
    //     console.log("load",src)
    //     return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+src+"?w="+width+"q=75"
    // }

    const myLoader = ({ src, width, quality,target }:any)=>{
        // console.log("load naturalHeight",event.target.naturalHeight)
        // console.log("load complete",event.target.complete)
        // console.log("load",target)
       
        if(target.naturalHeight==120 && target.complete){
            setIsError(true)
            // return "/"+src
        }else{
            setIsError(false)
            // return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"
        }
    }

    const image = (
        <Image
        onError={onError}
        // src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"}
        src={isError?"/404-error.svg":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"}
        // src={"/404-error.svg"}
        alt={imageAlt}
        layout="fill"
        priority
        // onLoadingComplete={myLoader}
        />
    )

    return (
        <div>
                <div className="p-2 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <div className="w-auto h-80 relative">
                        {/* <Image
                        // src={!isError?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+imageSrc+".png":src}
                        src={!isError?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg":src}
                        // src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+imageSrc+".png"}
                        // src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+imageSrc+".svg"}
                        // loader={myLoader}
                        // src={imageSrc+".svg"}
                    
                        alt={imageAlt}
                        layout="fill"
                        priority
                        // onError={()=>{setSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+imageSrc+".png")}}
                        onError={onError}
                        /> */}
                        {image}
                    </div>
                </div>
            <h3 className="my-2 text-sm text-gray-700 text-center">{name}</h3>
            <div className="flex  items-center justify-center" role="group" aria-label="Button group">
                <Link href={"/detail/"+slug} passHref><button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Détail</button></Link>
                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Verso</button>
                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800"><HeartIcon className="h-6 w-6" aria-hidden="true" /></button>
            </div>
        </div>       
      )
}

export default PokemonItem