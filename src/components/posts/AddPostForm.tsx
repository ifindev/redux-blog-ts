import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from '../../redux/posts/postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = (changedTitle: string) => setTitle(changedTitle)
  const onContentChanged = (changedContent: string) =>
    setContent(changedContent)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content))
      setTitle('')
      setContent('')
    }
  }

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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
