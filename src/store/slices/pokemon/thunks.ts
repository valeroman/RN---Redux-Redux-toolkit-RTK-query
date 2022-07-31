import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { AppThunk } from '../../store';
import { pokemonApi } from "../../../api";
import { PokemonListResponse } from "../../../interfaces";
import { SmallPokemon } from '../../../interfaces/pokemon-list';


export const getPokemons = (page = 0): AppThunk => {

    return async(dispatch, getState) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get<PokemonListResponse>(`/pokemon?limit=10&offset=${ page * 10 }`);
        console.log(data);
        dispatch( setPokemons(data.results) );
    }
}

// export const startLoadingEvents = (): AppThunk => {
//     return async (dispath) => {
//       try {
//         const { data } = await calendarApi.get<IEventsResponse>(
//           '/events'
//         );
  
//         const events = convertEventsToDateEvents(data.events);
//         console.log('EVENTOS', events);
//         dispath(onLoadEvents(events));
//       } catch (error) {
//         console.log('Error cargando eventos');
//         console.error(error);
//       }
//     };
//   };
  