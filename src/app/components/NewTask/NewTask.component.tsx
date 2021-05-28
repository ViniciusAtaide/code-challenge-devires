import React, { useState } from 'react';
import { useAppDispatch } from "app/hooks";
import { newTask } from 'store/ducks/tasks.duck';
import { Form, Input } from './NewTask.styled';

export function NewTask() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <Form onSubmit={e => { e.preventDefault(); dispatch(newTask(title, description)); }}>
    <Input placeholder="Titulo" onChange={e => setTitle(e.target.value)} />
    <Input placeholder="Descrição" onChange={e => setDescription(e.target.value)} />
    <Input type="submit" value="Adicionar Tarefa" />
  </Form>
}