import React from 'react'

export default function PokemonCard(props) {
    
    const pokemonTypes = props.data.types.map(type => {
        return (
            <p key={type} className={`card--pokemon-type ${type}`} > {type} </p>
        )
    })
    
    const pokemonStats = props.data.stats.map(stat => {
        return (
            <div key={stat.name} className="pokemon-stat">
                <p className="pokemon-stat-name"> {stat.name} : </p>
                <p className="pokemon-stat-value"> {stat.value} </p>
            </div>
        )
    })
    
    const pokemonAbilities = props.data.abilities.map(ability => {
        return (
            <p key={ability} className="pokemon-ability"> {ability && "♦  " + ability} </p>
        )
    })
    
    return (
        <div className="pokemon-card">
            <h2 className="card--pokemon-name"> {props.data.name} </h2>
            <div className="card--pokemon-info">
                <img 
                    src={props.data.imgSrc} 
                    className="card--pokemon-image"
                />
                <div className="pokemon-data-container">
                    <hr/>
                    <div className="pokemon-data"> 
                        <span className="data-name">National Dex : </span> 
                        <span className="data-value"> {props.data.id} </span> 
                    </div>
                    <hr/>
                    <div className="pokemon-data"> 
                        <span className="data-name">Weight : </span> 
                        <span className="data-value">{props.data.weight} </span> 
                    </div>
                    <hr/>
                    <div className="pokemon-data"> 
                        <span className="data-name">Height : </span> 
                        <span className="data-value"> {props.data.height} </span> 
                    </div>
                    <hr/>
                    <div className="pokemon-data"> 
                        <span className="data-name"> Abilities : </span>
                        <div className="data-value"> {pokemonAbilities} </div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="pokemon-types-container">{pokemonTypes}</div>
            <div className="pokemon-stats-container"> {pokemonStats}</div>
        </div>
    )
}