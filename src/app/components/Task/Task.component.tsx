import { checkTask, deleteTask, Task } from "../../../store/ducks/tasks.duck";
import React from 'react';
import ReactTooltip from "react-tooltip";
import { useAppDispatch } from "app/hooks";
import { Button, Li, P } from './Task.styled';

type TaskProps = {
  task: Task
}


export function TaskComponent({ task }: TaskProps) {
  const dispatch = useAppDispatch();
  return (
    <Li>
      <P style={{ textDecoration: task.done ? "line-through" : "" }} data-tip={task.description}>
        <Button onClick={_ => dispatch(deleteTask(task.id))}>X</Button>
        <span onClick={_ => dispatch(checkTask(task))}>{task.title}</span>
      </P>

      <ReactTooltip place="top" type="dark" effect="float" />
    </Li>
  )
}