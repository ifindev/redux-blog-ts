import { createSlice } from '@reduxjs/toolkit'
import UsersState from '../../types/users'

const initialState: UsersState[] = [
  { id: '0', name: 'Tiana Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
