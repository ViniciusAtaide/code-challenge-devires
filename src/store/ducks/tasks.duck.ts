import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { client } from '.';

export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface GetTasks {
  tasks: Task[]
}

export interface AddTask {
  newTask: Task;
}

export interface CheckTask {
  task: Task;
}

export interface DeleteTask {
  taskId: number;
}

export interface State {
  data: { tasks: Task[] }
  loading: boolean
  error: any
}

const initialState: State = {
  data: { tasks: [] },
  loading: false,
  error: undefined,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleLoad: (state, _): State => ({
      ...state,
      loading: true,
    }),
    gotTasks: (_, { payload }: PayloadAction<GetTasks>) => ({
      data: { tasks: payload.tasks },
      loading: false,
      error: null
    }),
    gotError: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: payload
    }),
    taskAdded: (state, { payload }: PayloadAction<AddTask>) => ({
      ...state,
      loading: false,
      data: { tasks: [...state.data.tasks, payload.newTask] }
    }),
    taskChecked: (state, { payload }: PayloadAction<CheckTask>) => {
      for (let task of state.data.tasks) {
        if (task.id === payload.task.id) {
          task.done = payload.task.done
        }
      }
      state.loading = false;
    },
    taskDeleted: (state, { payload }: PayloadAction<DeleteTask>) => ({
      ...state,
      loading: false,
      data: { tasks: state.data.tasks.filter(task => task.id !== payload.taskId) }
    }),
  }
});

export const { taskAdded, taskChecked, toggleLoad, gotTasks, gotError, taskDeleted } = tasksSlice.actions;

export default tasksSlice.reducer;

export const fetchTasks = () => async (
  dispatch: Dispatch,
  _: () => RootState
) => {
  try {
    dispatch(toggleLoad({}));
    const r = await client.get<Task[]>(`${process.env.REACT_APP_BASE_URL}/todos`);
    dispatch(gotTasks({ tasks: r.data }));
  } catch (e) {
    dispatch(gotError(e.code))
  }
};

export const newTask = (title: string, description: string) => async (
  dispatch: Dispatch,
  _: () => RootState
) => {
  const task = { title, description, done: false }
  try {
    dispatch(toggleLoad({}));
    const r = await client.post<Task>(`${process.env.REACT_APP_BASE_URL}/todos`, task);
    dispatch(taskAdded({ newTask: r.data }))
  } catch (e) {
    dispatch(gotError(e.code))
  }
}

export const checkTask = (task: Task) => async (
  dispatch: Dispatch,
  _: () => RootState
) => {
  try {
    dispatch(toggleLoad({}));
    const r = await client.patch<Task>(`${process.env.REACT_APP_BASE_URL}/todos/${task.id}`, { done: !task.done });
    dispatch(taskChecked({ task: r.data }))
  } catch (e) {
    dispatch(gotError(e.code));
  }
}

export const deleteTask = (id: number) => async (
  dispatch: Dispatch,
  _: () => RootState,
) => {
  try {
    dispatch(toggleLoad({}));
    console.log('yo')
    const r = await client.delete<null>(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
    console.log(r.data);
    dispatch(taskDeleted({ taskId: id }))
  } catch (e) {
    dispatch(gotError(e.code));
  }
}