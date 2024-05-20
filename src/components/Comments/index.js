import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.setState
    return commentsList.map(eachComment => {
      ;<CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundClassNames,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }
  onClickName = event => {
    this.setState({nameInput: event.target.value})
  }

  onClickComment = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    return (
      <div className="bg-container">
        <div className="middle-container">
          <div>
            <h1 className="heading">Comments</h1>
            <form className="form" onSubmit={this.onSubmit}>
              <p className="paragraph">Say something about 4.0 technologies</p>
              <input
                type="text"
                className="text"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onClickName}
              />
              <textarea
                className="textarea"
                placeholder="Your Comment"
                value={commentInput}
                rows="5"
                onChange={this.onClickComment}
              ></textarea>
              <button type="submit" className="button1">
                Add Comments
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image1"
          />
          <div></div>
        </div>
        <hr className="hr-line" />
        <p className="paragraph">
          <span className="span-item">{commentsList.length}</span>
          Comments
        </p>
        <ul className="container1">{this.renderCommentsList()}</ul>
      </div>
    )
  }
}

export default Comments
