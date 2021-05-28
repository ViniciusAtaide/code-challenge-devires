import { checkTask, Task } from "../../store/ducks/tasks.duck";
import React from 'react';
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { useAppDispatch } from "app/hooks";

type TaskProps = {
  task: Task
}

const P = styled.p`
  margin: 0;
  padding: 0;
`;

export function TaskComponent({ task }: TaskProps) {
  const dispatch = useAppDispatch();
  return (
    <li onClick={_ => dispatch(checkTask(task))}>
      <P style={{ textDecoration: task.done ? "line-through" : "" }} data-tip={task.description}>{task.title}</P>
      <ReactTooltip place="top" type="dark" effect="float" />
    </li>
  )
}