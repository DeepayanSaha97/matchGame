// Write your code here.
import './index.css'

const NavBar = args => {
  const {score, topScore, isGameFinished} = args

  return (
    <nav className="navbar-con">
      <div className="logo-logoTitle-con">
        <img
          className="game-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      {!isGameFinished ? (
        <div className="score-topScore-con">
          <div className="score-con">
            <p className="score-label-value">Score: {score}</p>
          </div>
          <div className="top-score-con">
            <p className="top-score-label-value">Top Score: {topScore}</p>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
