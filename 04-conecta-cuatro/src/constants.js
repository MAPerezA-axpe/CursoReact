//Creamos los turnos que vamos a tener
export const TURNS = {
    X: '🔵',
    O: '🔴'
  }

export const FILLED = {
    Y: 'yes',
    N: 'no'  
}
  //Dibujamos el tablero
  //const board = Array(9).fill(null)
  
  //Creamos el cuadrado del tablero
  //Children para mostrar la X o la O
  //updateBoard para actualizar el tablero cuando hagamos click en una posición
  //index para saber que índice tiene cada cuadradito
  
  
export const WINNER_COMBOS = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
]