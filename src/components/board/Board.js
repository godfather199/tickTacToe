import Box from '../box/Box'
import './board.css'


function Board({board, onClick}) {
  return (
    <div className="boardContainer">
        {board.map((value, idx) => (
            <Box value = {value} onClick = {() => value === null && onClick(idx)} />
        ))}
    </div>
  )
}

export default Board