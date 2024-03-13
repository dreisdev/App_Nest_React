import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/TaskType';
import { RootState } from '../../app/store';
import api from '../../services/api/Axios-Instance';


export const fetchTasks = createAsyncThunk(
    'todolist/fetchTasks',
    async (): Promise<TaskType[]> => {
        const response = await api.get<TaskType[]>('/todolist');

        if (response.status > 204) return [];

        return response.data;
    }
)


export interface TaskState {
    tasks: TaskType[];
    task: TaskType | null;
    loading: boolean;
    error: string;
    // status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: TaskState = {
    tasks: [],
    task: null,
    loading: false,
    error: '',
    // status: 'idle',
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<{ title: string, description: string }>) => {
            const { tasks } = state;
            const id = String(tasks.length + 1);
            // const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

            const newTask = {
                id,
                title: action.payload.title,
                description: action.payload.description,
                done: false,
            }

            tasks.push(newTask);

        },

        removeTask: (state, action: PayloadAction<string>) => {
            const { tasks } = state;

            const taskIndex = tasks.findIndex((item) => item.id === action.payload);

            if (taskIndex === -1) return;

            tasks.splice(taskIndex, 1);
        },

        changeTaskStatus: (state, action: PayloadAction<string>) => {
            const { tasks } = state;

            const currentTask = tasks.find((item) => item.id === action.payload);

            if (!currentTask) return;

            currentTask.done = !currentTask.done;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {

            state.loading = false;
            state.error = "";
            state.tasks = [...action.payload];
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "failed to fetch tasks";
        })
    }
});

// Action creators are generated for each case reducer function
export const { addNewTask, removeTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks;