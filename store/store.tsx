import { configureStore } from '@reduxjs/toolkit'
import ToDOSlice from "../store/toDoSlice"

export const store = configureStore({
    reducer: {
        ToDOSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store




