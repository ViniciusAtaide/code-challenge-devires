import { Task } from "store/ducks/tasks.duck";
import { TaskComponent } from "./Task.component";
import React from 'react';
import styled from "styled-components";


interface TasksProps {
  tasks: Task[]
}

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export function TaskList({ tasks }: TasksProps) {
  return <Ul>
    {tasks.map(task => (
      <TaskComponent key={task.id} task={task} />
    ))}
  </Ul>
}