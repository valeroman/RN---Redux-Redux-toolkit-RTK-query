import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
   value: number;
};

const initialState: TodoState = {
   value: 0,
};

export const TodoSlice = createSlice({
   name: 'name',
   initialState,
   reducers: {
       increment: (state, /* action */ ) => {
           state.value += 1;
       },
       incrementByAmount: (state, action: PayloadAction<number>) => {
           state.value += action.payload;
       },
   }
});

// Action creators are generated for each case reducer function
export const { increment } = TodoSlice.actions;
