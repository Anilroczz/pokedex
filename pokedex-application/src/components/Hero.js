import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Pokedex from './Pokedex'
import Loader from './Loader'

export default function Hero({region}) {
    
    const [allPokemonData,setAllPokemonData] = useState(null)
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
        async function getPokemonData(region) {
            let url = `https://pokedex-ldvq.onrender.com/api/v1/pokemon?region=${region}`
            let response = await axios.get(url);

            let pokemonData = response.data.map((mon => {
                return { 
                    id : mon["dex_number"] ,
                    name : mon["name"],
                    height : mon["height"]/10 + " m",
                    weight : mon["weight"]/10 + " kg",
                    abilities : mon["abilities"],
                    types : mon["types"],
                    imgSrc : mon["images"]["normal"],
                    stats : mon["stats"].map(stat => ({
                          name : stat["name"],
                          value : stat["stat"]
                    }))
                  }
            }))
            
            setAllPokemonData(pokemonData)
            setLoading(false)
        }
        
        setLoading(true)
        getPokemonData(region) 
    }, [region])
    
    return (
        <main>
            {loading ? <Loader /> : <Pokedex data = {allPokemonData}/>}
        </main>
    )
}