import './resetButton.css'

function ResetButton({resetBoard}) {
  return (
    <>
      <button className="resetBtn" onClick={resetBoard}>Reset</button>
    </>
  )
}

export default ResetButton