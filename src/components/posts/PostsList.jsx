import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { postClapped } from '../../redux/posts/postsSlice'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  const onClapped = (id) => {
    dispatch(
      postClapped({
        id,
      })
    )
  }

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
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
            onClick={() => onClapped(post.id)}
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
