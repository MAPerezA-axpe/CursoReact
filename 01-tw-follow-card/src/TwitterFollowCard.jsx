//Para poder reutilizar los componentes es necesario que lo parametricemos y seamos capaces de pasarle parametros

//ESTO TODAVIA NO ES REUTILIZABLE
/*export function TwitterFollowCard (){
    return(
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar' alt= "El avatar de miguel" src="https://unavatar.io/midudev" />
               <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Pérez</strong>
                    <span className='tw-followCard-infoUserName'>@miguelangel</span>
               </div>

               <aside>
                    <button className='tw-followCard-button'>
                        Seguir
                    </button>
               </aside>
            </header>
        </article>
    )
}*/

//AHORA LO VAMOS A HACER REUTILIZABLE
/*export function TwitterFollowCard ({ userName, name, isFollowing }) {
    
    const imageSrc = `https://unavatar.io/${userName}`

    //Esto es igual que utilizar imageSrc (¡¡¡MUY IMPORTANTE UTILIZAR LAS LLAVES!!!) --> 
    // --> {`https://unavatar.io/${userName}`}
    return(
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar' 
                    alt= "El avatar de miguel" 
                    src={imageSrc} />
               <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
               </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
            
        </article>
    )
}*/

//AÑADIENDO FUNCIONES COMO PROPS (min 1h 18min de video)
/*export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
    
    const imageSrc = `https://unavatar.io/${userName}`

    //Esto es igual que utilizar imageSrc (¡¡¡MUY IMPORTANTE UTILIZAR LAS LLAVES!!!) --> 
    // --> {`https://unavatar.io/${userName}`}
    return(
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar' 
                    alt= "El avatar de miguel" 
                    src={imageSrc} />
               <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
               </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
            
        </article>
    )
}*/

//AHORA, VAMOS A HACER USO DE LOS HIJOS (children)
/*export function TwitterFollowCard ({ children, userName = 'unknown', isFollowing }) { //Se puece dar valor por defecto a los props
    
    const imageSrc = `https://unavatar.io/${userName}`

    //Esto es igual que utilizar imageSrc (¡¡¡MUY IMPORTANTE UTILIZAR LAS LLAVES!!!) --> 
    // --> {`https://unavatar.io/${userName}`}
    return(
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar' 
                    alt= "El avatar de miguel" 
                    src={imageSrc} />
               <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
               </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
            
        </article>
    )
}*/

//EL SIGUIENTE PASO A DAR ES HACER LA FUNCIONALIDAD DE LOS BOTONES PARA seguir y siguiendo (video min 1h38min)
//Para hacer esto debemos hacerlo con Estados y hay que importar {useState} de React
import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = 'unknown', initialIsFollowing}) { //Se puece dar valor por defecto a los props
    
    const imageSrc = `https://unavatar.io/${userName}`

    //De esta manera creamos un estado. Estas tres lineas serán lo mismo que la última
    /*const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/

    //Lo que haremos en la siguiente linea será identico a lo de las tres anteriores
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textSeguir = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        //Cuando hacemos click en el boton, vamos a darle la vuelta al valor de isFollowing
        setIsFollowing(!isFollowing) //Damos la vuelta al valor de isFollowing, es decir, si era True, lo cambiamos a False y viceversa
    }

    //Esto es igual que utilizar imageSrc (¡¡¡MUY IMPORTANTE UTILIZAR LAS LLAVES!!!) --> 
    // --> {`https://unavatar.io/${userName}`}
    return(
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
               <img className='tw-followCard-avatar' 
                    alt= "El avatar de miguel" 
                    src={imageSrc} />
               <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
               </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-textSeguir'>{textSeguir}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
            
        </article>
    )
}