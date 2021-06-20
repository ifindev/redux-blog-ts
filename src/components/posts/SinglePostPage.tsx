import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Link, RouteComponentProps } from 'react-router-dom'

import PostAuthor from './PostAuthor'

const SinglePostPage: React.FC<RouteComponentProps<{ postId: string }>> = ({
  match,
}) => {
  const { postId } = match.params

  const post = useAppSelector((state) =>
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
        <PostAuthor userId={post.user} />
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
