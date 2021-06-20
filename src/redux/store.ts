import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './posts/postsSlice'
import usersSlice from './users/usersSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersSlice,
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
