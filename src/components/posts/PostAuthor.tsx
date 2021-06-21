import React from 'react'
import { useAppSelector } from '../../redux/hooks'

const PostAuthor: React.FC<{ userId: string }> = ({ userId }) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  )
  return (
    <span
      style={{
        padding: '2px 5px',
        textAlign: 'center',
        backgroundColor: '#8B5CF6',
        color: 'white',
        borderRadius: '10px',
        fontSize: '12px',
      }}
    >
      {author ? author.name : 'Unknown author'}
    </span>
  )
}

export default PostAuthor
