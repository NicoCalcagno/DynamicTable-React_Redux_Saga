import { createSlice, combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Todo } from "../InterfaceData";




const todosSlice = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        setTodos: (state: Todo[],  payload : PayloadAction<Todo[]>) => payload.payload
    },
})

const todosCustomSlice = createSlice({
    name: 'todosCustom',
    initialState: [] as Todo[],
    reducers: {
        setTodosCustom: (state: Todo[], { payload }: PayloadAction<Todo[]>) => payload
    },
})


const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state: boolean, { payload }: PayloadAction<boolean>) => payload
    },
})

const isLoadingRowsSlice = createSlice({
    name: 'isLoadingRows',
    initialState: false,
    reducers: {
        setIsLoadingRows: (state: boolean, { payload }: PayloadAction<boolean>) => payload
    },
})

const dimSlice = createSlice({
    name: 'dim',
    initialState: 0,
    reducers: {
        setDim: (state: number, payload: PayloadAction<number>) => payload.payload
    },
})


export const { setTodos } = todosSlice.actions;
export const { setIsLoading } = isLoadingSlice.actions;
export const { setDim } = dimSlice.actions;
export const { setTodosCustom } = todosCustomSlice.actions;
export const { setIsLoadingRows } = isLoadingRowsSlice.actions;

export const getTodos = (state: RootState) => state.todos;
export const getTodosCustom = (state: RootState) => state.todosCustom;

export default combineReducers({
    todos: todosSlice.reducer,
    isLoading: isLoadingSlice.reducer,
    dim: dimSlice.reducer,
    todosCustom: todosCustomSlice.reducer,
    isLoadingRows: isLoadingRowsSlice.reducer
})