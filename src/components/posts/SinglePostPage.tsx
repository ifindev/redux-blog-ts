import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <div style={{ margin: '40px' }}>
      <article className="post">
        <h2>{post.title}</h2>
        <div style={{ maxWidth: '100%' }}>
          <p className="post-content">{post.content}</p>
        </div>
        <Link to={`/editPost/${postId}`} className="button">
          Edit Post
        </Link>
      </article>
    </div>
  )
}

export default SinglePostPage
