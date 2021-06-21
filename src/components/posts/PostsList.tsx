import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Link } from 'react-router-dom'

import PostsState from '../../types/posts'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsList: React.FC = () => {
  const posts: PostsState[] = useAppSelector((state) => state.posts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  console.log(orderedPosts)

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <section style={{ marginTop: '10px', padding: '0px' }}>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </section>
      <p className="post-content">
        {post.content.substring(0, 100)}{' '}
        {post.content.length > 100 ? '...' : ''}{' '}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ReactionButtons post={post} />
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
