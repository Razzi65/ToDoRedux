import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addDoc, collection } from "firebase/firestore";
import db from '@/firebase/config';


const addToDo = createAsyncThunk('todo/addtodo', async (item:any) => {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            toDoItem: item,
        }
        )
    //     console.log(docRef.id);

    } catch (error) {
        console.log(error);


    }

    return item



})

export const ToDOSlice = createSlice({
    name: 'todoapp',
    initialState: [],
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(addToDo.fulfilled, (state, action) => {
            console.log(action.payload);


        })
    }

})

export default ToDOSlice.reducer
export { addToDo } 