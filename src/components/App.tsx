import React, { ReactNode, UIEventHandler, useCallback, useEffect, useRef } from 'react';
import './App.css';

import LoadingSpinner from './loadingspinner/LoadingSpinner';
import Table from './table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import * as Actions from './actions';


const App: React.FC = () => {

  const columns = [
    "UserId",
    "Id",
    "Title",
    "Completed"
  ];

  
  
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const dim = useSelector((state: RootState) => state.dim);
  const todosCustom = useSelector((state: RootState) => state.todosCustom);
  const todos = useSelector((state: RootState) => state.todos);
  

  const dispatch = useDispatch();

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(Actions.getTodosApi());
    console.log("chiamo getTodosApi()");
  }, []);

  let increment = dim;

  useEffect(() => {
    dispatch(Actions.loadMockData(dim));
    console.log("chiamo loadMockData("+dim+")");
  }, [dim, dispatch, todos]);

  const handleScroll = () => {
    
    if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight - 3) {
      //console.log(window.scrollY + " scrollY" + window.innerHeight + " window Height" + document.documentElement.offsetHeight);

      increment += 10;
      console.log(increment + " increment");
      dispatch(Actions.incrementDim(increment));

      }
    }
  
  
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  } else {
    return (
      <>
          <Table data={todosCustom} columns={columns} />
      </>
    );
  }
}

export default App;
