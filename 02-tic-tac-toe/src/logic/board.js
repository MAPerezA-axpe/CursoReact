import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    //Revisamos todas las combinaciones ganadoras para ver si hay algun ganado (X u O)
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && //Comprobar si la posicion 0 es X u O
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c] 
      ){
        return boardToCheck[a] //Devolver X u O (ganador)
      }
    }
    //Si no hay ganador devolvemos null
    return null
}

export const checkEndGame = (newBoard) => {
    //Revisamos si hay un empate. Esto ocurre cuando no hay un ganador y no queda ningún espacio vacío en el tablero
    return newBoard.every((square) => square !== null)
  }