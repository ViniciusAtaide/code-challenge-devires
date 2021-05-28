import React, { useEffect } from 'react';
import { fetchTasks } from 'store/ducks/tasks.duck';
import { Hero } from './App.styled';
import { ErrorComponent } from './components/Error/Error.component';
import { Loading } from './components/Loading/Loading.component';
import { NewTask } from './components/NewTask/NewTask.component';
import { TaskList } from './components/TaskList/TaskList.component';
import { useAppDispatch, useAppSelector } from './hooks';


function App() {
  const { data: { tasks }, loading, error } = useAppSelector((state) => state.tasksReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])


  if (error) {
    return <Hero>
      <ErrorComponent error={error} />
    </Hero>
  }

  return (
    <Hero>
      {loading &&
        <Loading />
      }
      <h1>Gerenciador de Tarefas</h1>
      <TaskList tasks={tasks} />
      <NewTask />
    </Hero>
  );
}

export default App;
