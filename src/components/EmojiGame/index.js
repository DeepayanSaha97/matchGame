import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    previouslyClickedEmojiList: [],
    isGameFinished: false,
  }

  onChooseEmoji = id => {
    const {previouslyClickedEmojiList} = this.state
    previouslyClickedEmojiList.forEach(eachId => {
      if (id === eachId) {
        this.setState({isGameFinished: true})
      } else {
        this.shuffledEmojisList()
        const updatedPreviouslyClickedEmojiList = [
          ...previouslyClickedEmojiList,
          id,
        ]
        this.setState(oldState => ({
          score: oldState.score + 1,
          topScore: oldState.topScore + 1,
          previouslyClickedEmojiList: updatedPreviouslyClickedEmojiList,
          isGameFinished: false,
        }))
      }
    })
  }

  onPlayAgain = () => {
    const {topScore, score} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    } else {
      this.setState({
        topScore,
      })
    }
    this.setState({
      score: 0,
      previouslyClickedEmojiList: [],
      isGameFinished: false,
    })
  }

  renderGameContent = () => {
    const {emojisList} = this.props
    return (
      <ul className="emoji-cards-list-con">
        {emojisList.map(emojiItem => (
          <EmojiCard
            itemDetails={emojiItem}
            key={emojiItem.id}
            onClickEmoji={this.onChooseEmoji}
          />
        ))}
      </ul>
    )
  }

  renderGameResult = () => {
    const {score} = this.state
    return (
      <WinOrLoseCard score={score} onClickPlayAgainBtn={this.onPlayAgain} />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isGameFinished} = this.state
    return (
      <div className="bg-con">
        <NavBar
          isGameFinished={isGameFinished}
          score={score}
          topScore={topScore}
        />
        <div className="game-content-result-view">
          {!isGameFinished ? this.renderGameContent() : this.renderGameResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

// Write your code here.
