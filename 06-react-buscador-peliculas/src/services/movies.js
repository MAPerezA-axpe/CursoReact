const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
    if(search === '') return null
    
    if(search) {
        //setResponseMovies(withResults) //Esto lo utilizamos cuando todavía no tenemos que hacer el fetch (min 1h13min de vídeo)
        /*return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(json => {
                setResponseMovies(json)
            })*/

        //Lo hacemos mejor con async y await
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            const json = await response.json()

            const movies = json.Search
  
            return movies?.map(movie => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster
            }))
        } catch (e) {
            throw new Error('Error searching movies')
        }
    }
}