import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import { postAdded } from '../../redux/posts/postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useAppDispatch()

  const users = useAppSelector((state) => state.users)

  const onTitleChanged = (changedTitle: string) => setTitle(changedTitle)
  const onContentChanged = (changedContent: string) =>
    setContent(changedContent)
  const onAuthorChanged = (changedUser: string) => setUserId(changedUser)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            onTitleChanged(e.target.value)
          }
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
            onAuthorChanged(e.target.value)
          }
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          rows={10}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
            onContentChanged(e.target.value)
          }
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
