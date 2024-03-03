import React,{ useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
    const [region,setRegion] = useState("kanto")
    
    function handleChange(event) {
        setRegion(event.target.value)
    }
    
    return (
        <div>
            <Navbar region={region} handleChange={handleChange} />
            <Hero region={region}/>
        </div>
    )
}