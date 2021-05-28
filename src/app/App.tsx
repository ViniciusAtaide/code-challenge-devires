import React, { useEffect } from 'react';
import { fetchTasks } from 'store/ducks/tasks.duck';
import styled from 'styled-components';
import { ErrorComponent } from './components/Error.component';
import { NewTask } from './components/NewTask.component';
import { TaskList } from './components/TaskList.component';
import { useAppDispatch, useAppSelector } from './hooks';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`

function App() {
  const { data: { tasks }, loading, error } = useAppSelector((state) => state.tasksReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])

  if (loading) {
    return <Hero>
      Carregando...
    </Hero>
  }

  if (error) {
    return <Hero><ErrorComponent error={error} /></Hero>
  }

  return (
    <Hero>
      <h1>Gerenciador de Tarefas</h1>
      <TaskList tasks={tasks} />
      <NewTask />
    </Hero>
  );
}

export default App;
