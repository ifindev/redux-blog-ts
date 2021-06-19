import { createSlice, nanoid } from '@reduxjs/toolkit'

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima recusandae nisi ab ipsum eveniet, doloremque repellat reiciendis provident illo dicta, cupiditate possimus rem accusantium odio facere aut quo beatae. Illum tempora aut quo sint esse. Ipsum veritatis sit, tempora explicabo amet voluptate perferendis tempore eos fugit veniam ratione ipsa non deserunt nesciunt ullam? Molestias neque natus sequi laudantium sunt, possimus mollitia saepe perspiciatis error debitis blanditiis eum. Nemo ab quod ipsa! Repudiandae officia qui eum quo numquam modi laborum nesciunt vero, corporis sint! A hic officiis vitae repellendus molestias consectetur blanditiis sed ab debitis sit, sequi dolor. Tempore, repudiandae.'

const initialState = [
  { id: '1', title: 'First Post!', content: `${lorem}`, clap: 0 },
  { id: '2', title: 'Second Post!', content: 'More text', clap: 0 },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        // This is done with immer in slice. So the update is immutably done
        state.push(action.payload)
      },

      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            clap: 0,
          },
        }
      },
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
