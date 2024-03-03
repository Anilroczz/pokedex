import React from 'react'

export default function PokemonMiniCard(props) {
    
    const pokemonTypes = props.types.map(type => {
        return (
            <p key={type} className={`pokemon-type ${type}`}> {type} </p>
        )
    })
    
    return (
        <div className="pokemon-mini-card" onClick={props.handleClick}>
            <img src={props.imgSrc} className="pokemon-image"/>
            <div className="pokemon-info">
                <p className="pokemon-id">#{props.id}</p>
                <h4 className="pokemon-name">{props.name}</h4>
                <div className="pokemon-types-container">
                    {pokemonTypes}
                </div>
            </div>
        </div>
    )
}