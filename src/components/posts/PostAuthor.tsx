import React from 'react'
import { useAppSelector } from '../../redux/hooks'

const PostAuthor: React.FC<{ userId: string }> = ({ userId }) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  )
  return (
    <div
      style={{
        padding: '2px',
        marginTop: '10px',
        textAlign: 'center',
        backgroundColor: '#8B5CF6',
        color: 'white',
        width: '100px',
        borderRadius: '10px',
        fontSize: '12px',
      }}
    >
      {author ? author.name : 'Unknown author'}
    </div>
  )
}

export default PostAuthor
