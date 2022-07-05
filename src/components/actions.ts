import { createAction } from "@reduxjs/toolkit";
import { GET_TODOS_API, INCREMENT_DIM, LOAD_MOCK_DATA } from "../InterfaceData";




export const getTodosApi = createAction(GET_TODOS_API);

export const loadMockData = createAction<number>(LOAD_MOCK_DATA);

export const incrementDim = createAction<number>(INCREMENT_DIM);
