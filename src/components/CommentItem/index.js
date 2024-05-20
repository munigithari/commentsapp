import formatDistanceToNow from 'data-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails

  const result1 = name ? name[0].toUpperCase() : ''
  const result2 = isLiked ? 'button active' : 'button'
  const result3 = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClikcLike = () => {
    const {toggelIsLiked} = props

    toggelIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props

    deleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="container">
        <div className={initialClassName}>
          <p className="pra">{result1}</p>
        </div>
        <div>
          <div className="container2">
            <p className="paragraph">{name}</p>
            <p className="paragraph">{postedTime}</p>
          </div>
          <p className="paragraph">{comment}</p>
        </div>
      </div>
      <div className="container4">
        <div className="mini-container1">
          <img src={result3} alt="like" className="image" />
          <button type="button" className={result2} onClick={onClikcLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="button1"
          onClick={onDeleteComment}
          data-testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="imahe"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
