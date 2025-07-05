import { useState } from 'react'

const PostComments = () => {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div>
      <h2>Seção de Comentários</h2>
      <input
        data-testid="comment-input"
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Digite seu comentário"
      />
      <button
        data-testid="submit-button"
        onClick={handleAddComment}
      >
        Adicionar comentário
      </button>

      <ul data-testid="comments-list">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostComments
