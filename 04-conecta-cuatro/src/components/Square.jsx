export const Square = ({ children, isSelected, isFilled, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''} ${isFilled ? 'is-filled' : ''}`

    const handleClick = () =>{
      updateBoard(index)
    }
  
    return( 
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }