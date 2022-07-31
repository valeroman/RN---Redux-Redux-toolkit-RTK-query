
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/store';
import { Counter } from './src/components/Counter';
import { PokemonScreen } from './src/screens/PokemonScreen';
import { TodoScreen } from './src/screens/TodoScreen';

const App = () => {
  return (
    <Provider store={ store }>
      {/* <Counter /> */}
      {/* <PokemonScreen /> */}
      <TodoScreen />
    </Provider>
  )
}

export default App