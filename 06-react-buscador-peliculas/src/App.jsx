import { useRef, useState, useEffect, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  //const { movies: mappedMovies } = useMovies()
  const [sort, setSort] = useState(false)
  
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  //const inputRef = useRef()

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300), 
    [getMovies]
  ) //Le decimos que espere 300ms

  //MANERA MUY SIMPLE DE APRENDER CÓMO FUNCIONA useRef
  //De esta primera forma el contador no aumentaría porque cada vez que se renderice se actualiza el contador 
  /*let i = 0
  i++
  console.log(i)*/

  //De esta segunda forma, el contador sí va incrementando porque se trata de una referencia y, aunque se renderice un montón de veces, el valor anterior se sigue manteniendo
  /*const counter = useRef(0) //Es un valor que persiste entre renders
  counter.current++
  console.log(counter.current)*/


  //ESTE handleClick iba en el button antes de poner onSubmit en el formulario
  /*const handleClick = () => {
    const value = inputRef.current.value
    console.log(value)
  }*/

  //CREAR LA REFERENCIA
  /*const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }*/

  //EXISTE otra forma de crear la "referencia", pero sin usar referencias.
  /*const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }*/

  //HAY UNA FORMA FÁCIL de conseguir todos los inputs que podamos tener en un formulario:
  /*const handleSubmit = (event) => {
    evento.preventDefault()
    const fields = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(fields)
  }*/

  const handleSubmit = (event) => {
    event.preventDefault()
    /*const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )*/ 
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  /*useEffect(() => {
    console.log('new getMovies sorted')
  }, [getMovies])*/

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix, ...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
