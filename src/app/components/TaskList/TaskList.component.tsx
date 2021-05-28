import { Task } from "store/ducks/tasks.duck";
import { TaskComponent } from "../Task/Task.component";
import React from 'react';
import { Ul } from "./TaskList.styled";

interface TasksProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TasksProps) {
  return <Ul>
    {tasks.map(task => (
      <TaskComponent key={task.id} task={task} />
    ))}
  </Ul>
}