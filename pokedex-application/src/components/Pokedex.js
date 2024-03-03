import React,{useState} from 'react'
import PokemonCard from './PokemonCard'
import PokemonMiniCard from './PokemonMiniCard'

export default function Pokedex(props) {
    const [pokemonInfo,setPokemonInfo] = useState(props.data[0])
    
    function getPokemonInfo(id) {
        setPokemonInfo(props.data.find(item => item.id ===id))
    }
    
    const pokeElements = props.data.map(mon => {
        return (
            <PokemonMiniCard
                key = {mon.id}
                id = {mon.id}
                imgSrc = {mon.imgSrc}
                name = {mon.name}
                types = {mon.types}
                handleClick = {()=>getPokemonInfo(mon.id)}
            />
        )
    })
    
    return (
        <main className="pokedex">
            <PokemonCard data = {pokemonInfo}/>
            <section className="pokemon-list">
                {pokeElements}
            </section>
        </main>
    )
}