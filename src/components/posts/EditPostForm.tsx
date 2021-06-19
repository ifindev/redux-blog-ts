import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { useHistory, RouteComponentProps } from 'react-router-dom'
import PostsState from '../../types/posts'

import { postUpdated } from '../../redux/posts/postsSlice'

const EditPostForm: React.FC<RouteComponentProps<{ postId: string }>> = ({
  match,
}) => {
  const { postId } = match.params

  let post: PostsState = { id: '', title: '', content: '', clap: 0 }

  // We might not found a post with the params ID. So post might be undefined
  const findPost: PostsState | undefined = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (findPost) {
    post = findPost!
  }

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useAppDispatch()
  const history = useHistory()

  const onTitleChanged = (changedTitle: string) => setTitle(changedTitle)
  const onContentChanged = (changedContent: string) =>
    setContent(changedContent)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content, clap: post.clap }))
      history.push(`/posts/${postId}`)
    }
  }

  if (!title && !content) {
    return <h2>Sorry... We couldn't find the post you're looking for</h2>
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What\'s on your mind?"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            onTitleChanged(e.target.value)
          }
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          rows={10}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
            onContentChanged(e.target.value)
          }
        />
        <button type="button" onClick={onSavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
