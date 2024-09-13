import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        //OTRAS TRES FORMAS DE HACERLO
        /*const newFact = getRandomFact()
        setFact(newFact)*/
        //getRandomFact().then(setFact) //ESTO EN ALGUNAS OCASIONES PUEDE SER UNA MALA PRÁCTICA
        getRandomFact().then(newFact => setFact(newFact))
    }
    
    useEffect(refreshFact, [])

    return { fact, refreshFact}
}