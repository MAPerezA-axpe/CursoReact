import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  //MOVIMIENTO DEL PUNTERO
  useEffect(() => {
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //Tenemos que limpiar los efectos
    //Esto se ejecuta siempre que se desmonte el componente (deje de aparecer el componente)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } 
    //También se ejecuta cada vez que cambie la dependencia (en este caso enabled), antes de ejecutar el efecto de nuevo
  }, [enabled])

  //CAMBIAR BODY CLASSNAME
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  //EN LOS EFECTOS:
  // [] --> Sólo se ejecuta una vez cuando se monta el componente
  // [enabled] --> Se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined (no le pasamos nada) --> Se ejecuta cada vez que se renderiza el componente

  //const [isActive, setIsActive] = useState(isActive)

  //const buttonClassName = enabled ? 'pointer-button is-active' : 'pointer-button'
  let buttonClassName 
  if(enabled){
    buttonClassName = 'pointer-button is-active'
  } else {
    buttonClassName = 'pointer-button'
  }

  const handleClick = () => setEnabled(!enabled)

  return (
    <>
      <main>
        <div style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: '1px solid #ffff',
          borderRadius: '50%',
          opacity: 0.7,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }} />
        <button className={buttonClassName} onClick={handleClick}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>  
      </main>
    </>
    
  )
}

export default App
