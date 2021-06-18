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
      const idx = state.findIndex((post) => post.id === action.payload.id)
      state[idx].clap += 1
    },
  },
})

export const { postAdded, postClapped } = postsSlice.actions

export default postsSlice.reducer
