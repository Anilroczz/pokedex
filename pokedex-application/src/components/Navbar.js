import React from 'react'

export default function Navbar(props) {
    
    return (
        <nav className="navbar">
            <div className="nav-info">
                <img 
                    src="./images/pokeball.png" 
                    alt="pokeball logo"
                    className="nav-logo"
                />
                <h1 className="nav-title"> 
                    {props.region} POKEDEX 
                </h1>
            </div>
                
            <form className="search-bar">
                <img 
                    src="./images/search-logo.jfif" 
                    alt="search logo"
                    className="search-icon"
                />
                <select 
                    className="select-box"
                    value={props.region}
                    onChange={props.handleChange}
                >
                    <option value="kanto" className="select-box-option">-- Choose Region --</option>
                    <option value="kanto" className="select-box-option">Kanto</option>
                    <option value="johto" className="select-box-option">Johto</option>
                    <option value="hoenn" className="select-box-option">Hoenn</option>
                    <option value="sinnoh" className="select-box-option">Sinnoh</option>
                    <option value="unova" className="select-box-option">Unova</option>
                    <option value="kalos" className="select-box-option">Kalos</option>
                    <option value="alola" className="select-box-option">Alola</option>
                    <option value="galar" className="select-box-option">Galar</option>
                    <option value="paldea" className="select-box-option">Paldea</option>
                </select>
            </form>
        </nav>
    )
}