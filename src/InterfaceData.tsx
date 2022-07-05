

export interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean 
}

export interface DataToTable{
  data: Todo[],
  columns: string[]
}

export const GET_TODOS_API = 'GET_TODOS_API';
export const LOAD_MOCK_DATA = 'LOAD_MOCK_DATA';
export const INCREMENT_DIM = 'INCREMENT_DIM';