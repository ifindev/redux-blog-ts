import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', clap: 0 },
  { id: '2', title: 'Second Post!', content: 'More text', clap: 0 },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // This is done with immer in slice. So the update is immutably done
      state.push(action.payload)
    },

    postClapped(state, action) {
      const { id } = action.payload
      const clappedPost = state.find((post) => post.id === id)
      if (clappedPost) {
        clappedPost.clap += 1
      }
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postClapped, postUpdated } = postsSlice.actions

export default postsSlice.reducer
