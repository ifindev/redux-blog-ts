import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import type { RootState } from '../store'
import PostsState from '../../types/posts'

const initialState: PostsState[] = [
  {
    id: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: 'First Post!',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima recusandae nisi ab ipsum eveniet, doloremque repellat reiciendis provident illo dicta, cupiditate possimus rem accusantium odio facere aut quo beatae. Illum tempora aut quo sint esse. Ipsum veritatis sit, tempora explicabo amet voluptate perferendis tempore eos fugit veniam ratione ipsa non deserunt nesciunt ullam? Molestias neque natus sequi laudantium sunt, possimus mollitia saepe perspiciatis error debitis blanditiis eum. Nemo ab quod ipsa! Repudiandae officia qui eum quo numquam modi laborum nesciunt vero, corporis sint! A hic officiis vitae repellendus molestias consectetur blanditiis sed ab debitis sit, sequi dolor. Tempore, repudiandae.',
    clap: 0,
    user: '1',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    title: 'Second Post!',
    content: 'More text',
    clap: 0,
    user: '0',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '3',
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    title: 'Third Post!',
    content: 'More text',
    clap: 0,
    user: '0',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<PostsState>) => {
        // This is done with immer in slice. So the update is immutably done
        state.push(action.payload)
      },

      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title: title,
            content: content,
            clap: 0,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        }
      },
    },

    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: string }>
    ) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },

    postUpdated(
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, reactionAdded, postUpdated } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts

export default postsSlice.reducer
