//import { useEffect, useState } from "react"
import './App.css'
//import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from './components/Otro'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){
    
    //VÍDEO 4
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    //Una de las cosas más importantes del useEffect es utilizarlo para el fetching de datos
    //PODEMOS TENER MÁS DE UN useEffect en un archivo
    //Es importante y está bien que en React los efectos únicamente tengan una responsabilidad

    /*const getRandomFact = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact: fetchedFact } = data
                setFact(fetchedFact)
            })
    }*/

    //Para recuperar la cita al cargar la página
    //TENEMOS DOS FORMAS DE HACERLO
    //useEffect(() => {
        //OTRAS TRES FORMAS DE HACERLO
        /*const newFact = getRandomFact()
        setFact(newFact)*/
        //getRandomFact().then(setFact) //ESTO EN ALGUNAS OCASIONES PUEDE SER UNA MALA PRÁCTICA
        //getRandomFact().then(newFact => setFact(newFact))
    //}, [])

    //Esta segunda forma se puede hacer así gracias a que useEffect acepta funciones en su primer parámetro
    //useEffect(getRandomFact, []) //NO OLVIDARNOS NUNCA DE LAS DEPENDENCIAS
    //Las dependencias que ponemos aqui son aquellas que en algún momento podrían llegar a cambiar. En este caso, setFact no debería cambiar nunca
    
    //Para recuperar la imagen cada vez que tenemos una nueva cita
    /*useEffect(() => {
        if(!fact) return
        const firstWord = fact.split(' ')[0] //Para quedarnos con la primera palabra
        //const palabras = fact.split(' ').slice(0, 3).join(' ') //Para quedarnos con las tres primeras palabras
        //También podemos coger las 3 primeras palabras con el split directamente gracias a su segundo parámetro:
        const twoFirstWords = fact.split(' ', 2).join(' ')
        //console.log(firstWord)
        //console.log(palabras)

        fetch(`https://cataas.com/cat/says/${twoFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            
            const { url } = response
            setImageUrl(url)
        })
    }, [fact])*/

    //A PARTIR DE AQUI ESTAMOS EN EL VIDEO 4.
    //Haciendo el primer useEffect de esta manera logramos que se haga toda la misma implementación al pulsar el botón
    //Esto ocurre así gracias a que hemos utilizado el useEffect
    /*const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }*/

    const handleClick = async () => {
        refreshFact()
    }

    return(
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

        
            <Otro />
        </main>
    )
}