import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const { 
    decrement, 
    decrementByAmount, 
    increment, 
    incrementByAmount, 
    reset 
} = counterSlice.actions;
