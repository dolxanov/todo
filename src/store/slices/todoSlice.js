import {createSlice} from '@reduxjs/toolkit'

const  initialState = {
    list : [],

}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        setList(state, action){
            state.list.push(action.payload)
        }

    }
})

export const {setList} = todoSlice.actions
export default todoSlice.reducer