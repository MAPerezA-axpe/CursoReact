import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkEndGame, checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import './App.css'

function App() {
  //Dibujamos el tablero
  const [board, setBoard] = useState(() => {
    
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //null es que no hay ganador y false lo utilizamos para decir que hay un empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //ES IMPORTANTE NO ACTUALIZAR LA POSICION SI YA TIENE ALGO o SI YA HAY UN GANADOR
    if(board[index] || winner) return

    //Actualizacion del tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //GUARDAMOS AQUI LA PARTIDA
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    
    //Revisamos aqui si hay algun ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }

    //Comprobamos si el juego ha finalizado por tener un empate o un ganador
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false) //Ha habido un empate
    }

  }

  //Añadimos el useEffect (Min 1h14min de video)
  /*useEffect(() => {
    console.log('useEffect')
  }, [])*/ //Si en la lista de dependencias pasamos un array vacío, solo se ejecuta código cuando se renderiza por primera vez el componente

  //Si, por ejemplo, queremos que el useEffect se ejecute cada vez que cambie de ganador, lo que debemos hacer es incluir el winner en esa lista de dependencias
  //En este caso, cuando volvamos a comenzar el juego, como cambiamos el ganador a null, también se volvería a ejecutar el useEffect porque hemos modificado el winner
  useEffect(() => {
    console.log('useEffect')
  }, [winner]) 
  //Tambien podemos hacerlo si queremos que se ejecute el useEffect cuando cambia el turno o el board con [turn, board]

  //Resetear la partida una vez hemos finalizado con una de las ejecuciones
  //Lo que debemos hacer es volver a poner los valores por defecto que había al comienzod el juego
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  return(
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
    )
}

export default App
