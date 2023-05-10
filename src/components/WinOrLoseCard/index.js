// Write your code here.
import './index.css'

const WinOrLoseCard = args => {
  const {score, onClickPlayAgainBtn} = args

  const handleClick = () => {
    onClickPlayAgainBtn()
  }

  const winOrLoseImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameResultInHeading =
    score === 12 ? (
      <p className="result-in-heading">You Won</p>
    ) : (
      <p className="result-in-heading">You Lose</p>
    )

  const gameScoreLabel =
    score === 12 ? (
      <p className="score-label">Best Score</p>
    ) : (
      <p className="score-label">Score</p>
    )
  return (
    <div className="game-result-card">
      <div>
        {gameResultInHeading}
        {gameScoreLabel}
        <p className="game-score">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={handleClick}>
          Play Again
        </button>
      </div>
      <img src={winOrLoseImg} alt="winOrLose" className="win-or-lose-img" />
    </div>
  )
}

export default WinOrLoseCard
