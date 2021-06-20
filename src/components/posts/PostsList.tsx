import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { Link } from 'react-router-dom'

import PostsState from '../../types/posts'
import { postClapped } from '../../redux/posts/postsSlice'
import PostAuthor from './PostAuthor'

const PostsList: React.FC = () => {
  const posts: PostsState[] = useAppSelector((state) => state.posts)

  const dispatch = useAppDispatch()

  const onClapped = (id: string) => {
    dispatch(
      postClapped({
        id,
      })
    )
  }

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p className="post-content">
        {post.content.substring(0, 100)}{' '}
        {post.content.length > 100 ? '...' : ''}{' '}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            padding: '5px',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              border: 'none',
              padding: '0px',
              margin: '0px',
              fontSize: '20px',
            }}
            onClick={(): void => onClapped(post.id)}
          >
            <span role="img" aria-label="clap hand">
              {' '}
              👏
            </span>
          </button>
          <span style={{ marginTop: '1px', marginLeft: '5px' }}>
            {post.clap}
          </span>
        </div>
        <div>
          <Link
            to={`/posts/${post.id}`}
            className="button muted-button"
            style={{ marginRight: '10px' }}
          >
            View Post
          </Link>
        </div>
      </div>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
