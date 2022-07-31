import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonListResponse, SmallPokemon } from '../../../interfaces/';
import axios from 'axios';


interface pokemonState {
   page: number;
   pokemons: SmallPokemon[];
   isLoading: boolean;
};

const initialState: pokemonState = {
   page: 0,
   pokemons: [],
   isLoading: false,
};

export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState,
   reducers: {
       startLoadingPokemons: (state, /* action */ ) => {
           state.isLoading = true;
       },
       setPokemons: (state, action: PayloadAction<SmallPokemon[]>) => { //action: PayloadAction<Page[], string, { currentPage: number }>
        state.isLoading = false;
        state.pokemons = action.payload; 
        // state.page = action.payload.page + 1
        // console.log(action);  
       },
   },
});

// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;