//Creamos los turnos que vamos a tener
export const TURNS = {
    X: '❌',
    O: '⚪'
  }
  
  //Dibujamos el tablero
  //const board = Array(9).fill(null)
  
  //Creamos el cuadrado del tablero
  //Children para mostrar la X o la O
  //updateBoard para actualizar el tablero cuando hagamos click en una posición
  //index para saber que índice tiene cada cuadradito
  
  
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]