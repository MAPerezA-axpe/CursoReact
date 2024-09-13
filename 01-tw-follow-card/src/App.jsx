//IMPORTAMOS el App.css para poder estilar bien la Twitter Card
import { Children, useState } from 'react'
import './App.css'

//Hacemos lo mismo con TwitterFollowCard
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Heral',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomás',
        isFollowing: false
    }
]

export function App (){
   //PRIMERA PRUEBA DE LA TWITTER CARD (MUY BASICA)
    /* return (
        <div>
            <h1>Twitter Card</h1>
        </div>  
    )*/

    /*return(
        //Esta forma de hacer el article no es ni la mejor ni la mas correcta, pero puede ser que necesite utilizarla en algun momento
        //Lo mejor en este caso es estilar directamente App.jsx con App.css
        //<article style={{display: 'flex', alignItems: 'center', color: '#fff'}}>
        
        //ESTO ES PARA HACERLO SIN ESTILAR PRACTICAMENTE NADA (hasta el minuto 1h 05min)
        <article> 
            <header>
               <img alt= "El avatar de miguel" src="https://unavatar.io/midudev" />
               <div>
                    <strong>Miguel Ángel Pérez</strong>
                    <span>@miguelangel</span>
               </div>

               <aside>
                    <button>
                        Seguir
                    </button>
               </aside>
            </header>
        </article>*/
        
        //HATA AQUI ES EL MINUTO 1h 09min del video
        //Esta no es exactamente la manera correcta de utlizar los componentes debido a que esto no es reusable, por lo que debemos usar bien el componente creando TwitterFollowCard.jsx
        /*<article className='tw-followCard'> 
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
        </article>*/

        //AHORA, en lugar de utilizar la componente App debemos utilizar TwitterFollowCard
        //Como queremos utilizar mas de un nuevo usuario debemos agruparlo con React.Fragment
        //Para no tener que estar utilizando React.Fragment todo el rato, podemos envolver esos dos elementos para devolverlos y renderizarlos
        //sin necesidad de escribir el React.Fragment podemos hacerlo utilizando <> y </>
    
    const format = (userName) => `@${userName}`
    
    //return(
        //De esta forma se haría todo bien, pero sin margen uno debajo de otro (hasta 1h 15min de video)
        /*<>
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard userName="miguelangel" name="Miguel Ángel "/> 
        </>*/

        //Para mejorar esto, vamos a meter margen arriba y abajo de cada uno de los usuarios:
        //Se hace más a nivel de aplicacion esta separacion (a nivel del contenedor)
        //Añadimos la nueva Prop "isFollowing" también. Para pasar los booleanos se hace entre llaves {}
        //Si queremos que sea TRUE podemos hacerlo sin pasarlo por llaves, es decir, poniendo directamente --> isFollowing
        /*<section className='App'>
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" isFollowing={true}/>
            <TwitterFollowCard userName="pheralb" name="Pablo Hernandez" isFollowing={false}/>
            <TwitterFollowCard userName="miguelangel" name="Miguel Ángel" isFollowing/> 
        </section>*/

        //AÑADIMOS EN ESTE MOMENTO UNA FUNCION COMO PROPS
        //Lo que hacemos en este caso concreto es pasarle la funcion a TwitterFollowCard para que se ejecute desde allí
        /*<section className='App'>
            <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Ángel Durán" isFollowing={true}/>
            <TwitterFollowCard formatUserName={format} userName="pheralb" name="Pablo Hernandez" isFollowing={false}/>
            <TwitterFollowCard formatUserName={format} userName="miguelangel" name="Miguel Ángel" isFollowing/> 
        </section>*/

        //AHORA, en lugar de pasar el nombre de usuario (UserName) y formatearlo, lo voy a pasar ya formateado
       /* <section className='App'>
            <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Ángel Durán" isFollowing={true}/>
            <TwitterFollowCard formatUserName={format} userName="pheralb" name="Pablo Hernandez" isFollowing={false}/>
            <TwitterFollowCard formatUserName={format} userName="miguelangel" name="Miguel Ángel" isFollowing/> 
        </section>*/

    //AHORA, vamos a realizar las diferentes funcionalidades unicamente con hijos (children)
        
    //La parte del boton se añade en el min 1h51min de video y sirve para realizar y mostrar algunos cambios de renderizado
    //Eso se añade junto con la siguiente linea de constante
    const [name, setName] = useState('midudev')

    /*
    return (    
        <section className='App'>
            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Ángel Durán   
            </TwitterFollowCard>
            
            {/* ASÍ SE PONEN LOS COMENTARIOS EN .jsx y en el renderizado, es obligatorio hacerlo entre llaves {} }

            {/*<TwitterFollowCard userName={name}>
                Miguel Ángel Durán   
            </TwitterFollowCard>}

            <TwitterFollowCard userName="pheralb">
                Pablo Hernández
            </TwitterFollowCard>

            {/*<button onClick={() => setName('miguelangel')}>
                Cambio nombre
            </button>}

            
        </section>
        
    )*/

    //AHORA vamos a renderizar pero con arrays (renderizado de listas) (video 2h 15min)  
    return (    
        <section className='App'>
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>

                ) 

            })
        }
        </section>
    )
}