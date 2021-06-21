import React from 'react'
import PostsState from '../../types/posts'

const reactionEmoji: { [emoji: string]: string } = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButtons: React.FC<{ post: PostsState }> = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="muted-button reaction-button">
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return <>{reactionButtons}</>
}

export default ReactionButtons
