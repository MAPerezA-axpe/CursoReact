//import withResults from '../mocks/with-results.json'
//import withoutResults from '../mocks/no-results.json'
import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

//Custom Hook
export function useMovies({ search, sort }){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const previousSearch = useRef(search)

    /*const getMovies = async () => {
        if(search === previousSearch.current) return

        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            //Esto se ejecuta tanto si ocurre el try como si ocurre el catch
            setLoading(false)
        }
    }*/

    /*const getMovies = useMemo(() => {
        return async ({ search }) => {
            if(search === previousSearch.current) return

            try{
                setLoading(true)
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({ search })
                setMovies(newMovies)
            } catch (e) {
                setError(e.message)
            } finally {
                //Esto se ejecuta tanto si ocurre el try como si ocurre el catch
                setLoading(false)
            }
        }
    }, [])*/

    //useCallback es EXACTAMENTE LO MISMO que useMemo, pero con funciones
    const getMovies = useCallback(async ({ search }) => {
        if(search === previousSearch.current) return

        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            //Esto se ejecuta tanto si ocurre el try como si ocurre el catch
            setLoading(false)
        }
    }, [])
    
    /*const sortedMovies = sort 
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies*/

    const sortedMovies = useMemo(() => {
        //console.log('memoSortedMovies')
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies]) 
    //Cuando cambia el sort o cambian las películas se vuelve a ejecutar lo que hay dentro del useMemo
    //Sin embargo, como no hay una dependencia con el search, no es necesario que se renderice esto cuando haya un cambio en el input de búsqueda
        
    return { movies: sortedMovies, loading, getMovies }
  }