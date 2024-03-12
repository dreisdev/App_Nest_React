import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/TaskType';
import { RootState } from '../../app/store';


export interface TaskState {
    tasks: TaskType[];
}

const initialState: TaskState = {
    tasks: [],
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<string>) => {
            const { tasks } = state;
            const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

            const newTask = {
                id,
                name: action.payload,
                done: false,
            }

            tasks.push(newTask);

        },

        removeTask: (state, action: PayloadAction<number>) => {
            const { tasks } = state;

            const taskIndex = tasks.findIndex((item) => item.id === action.payload);

            if (taskIndex === -1) return;

            tasks.splice(taskIndex, 1);
        },

        changeTaskStatus: (state, action: PayloadAction<number>) => {
            const { tasks } = state;

            const currentTask = tasks.find((item) => item.id === action.payload);

            if (!currentTask) return;

            currentTask.done = !currentTask.done;
        }


    },
});

// Action creators are generated for each case reducer function
export const { addNewTask, removeTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks;