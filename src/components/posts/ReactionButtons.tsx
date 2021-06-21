import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { reactionAdded } from '../../redux/posts/postsSlice'
import PostsState from '../../types/posts'

const reactionEmoji: { [emoji: string]: string } = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButtons: React.FC<{ post: PostsState }> = ({ post }) => {
  const dispatch = useAppDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return <>{reactionButtons}</>
}

export default ReactionButtons
