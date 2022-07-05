
import { put, takeLatest, select, call, all, takeEvery } from 'redux-saga/effects'
import { GET_TODOS_API, INCREMENT_DIM, LOAD_MOCK_DATA, Todo } from '../InterfaceData'
import axios from "axios";
import * as slicesActions from './slices'



const getTodo = () => axios.get('https://jsonplaceholder.typicode.com/todos')

export function* getTodosApi():any {
    yield put(slicesActions.setIsLoading(true));

    try {
        const response = yield call(getTodo);
        yield put(slicesActions.setTodos(response.data))
    } catch (err) {
        console.error(err)
    }
    yield put(slicesActions.setIsLoading(false));
}

export function* loadMockData(action?: any): any {
    yield put(slicesActions.setIsLoadingRows(true));

    const todos: Todo[] = yield select(slicesActions.getTodos);
    const todosCustom: Todo[] = yield select(slicesActions.getTodosCustom);
    if (action !== undefined) {
        const todoFromIndex = todos.slice(action.payload, action.payload + 10);
        yield put(slicesActions.setTodosCustom([...todosCustom, ...todoFromIndex]))
    }
    yield put(slicesActions.setIsLoadingRows(false));
}

export function* incrementDim(action?: any):any {
    if(action !== undefined)
        yield put(slicesActions.setDim(action.payload));
}

export default function* allSaga() {
    yield all([
        takeLatest(GET_TODOS_API, getTodosApi),
        takeEvery(INCREMENT_DIM, incrementDim),
        takeLatest(LOAD_MOCK_DATA, loadMockData)
    ]);
}


