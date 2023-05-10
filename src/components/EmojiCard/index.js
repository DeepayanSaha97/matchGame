// Write your code here.
import './index.css'

const EmojiCard = args => {
  const {itemDetails, onClickEmoji} = args
  const {id, emojiName, emojiUrl} = itemDetails

  const handleEmojiClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={handleEmojiClick}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
