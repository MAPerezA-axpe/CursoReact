import { useState, useEffect } from "react"


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

//Creación de nuestros propios Custom Hooks
export function useCatImage({ fact }){
    const [imageUrl, setImageUrl] = useState()

    //UTILIZANDO 2 useEffect para que los efectos en React únicamente tengan una resposabilidad
    //Para recuperar la imagen cada vez que tenemos una nueva cita
    useEffect(() => {
        //Este fact que estoy utilizando aqui ahora mismo es el fact del estado declarado en la línea 8
        if(!fact) return

        //const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWords}`
                setImageUrl(url)
                console.log(response)
                console.log(url)
                //const 
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} //Lo que estamos haciendo en este Custom Hook es devolver una URL con una imagen
