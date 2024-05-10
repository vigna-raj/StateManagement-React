import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../Features/noteSlice';
export const store = configureStore(
    {
        reducer: noteReducer
    }
)