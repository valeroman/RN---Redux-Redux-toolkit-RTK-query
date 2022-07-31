import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store';
import { getPokemons } from '../store/slices/pokemon';

export const PokemonScreen = () => {

  const { isLoading, pokemons = [], page } = useAppSelector( state => state.pokemons );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <SafeAreaView>

        <Text style={ styles.textTitle }>Pokemon name:</Text>
        {
          pokemons.map((pokemon) => (
            console.log(pokemon),
            <View style={ styles.container } key={pokemon.id + pokemon.name}>
              <Text style={ styles.textName }>{ pokemon.name }</Text>
            </View>
          ))
        }

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => dispatch(getPokemons(page + 1)) }
        >
          <Text style={ styles.textButton }>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginVertical: 5,
      marginHorizontal: 20
    },
    textName: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    textTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      marginHorizontal: 20
    },
    button: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      borderRadius: 8,
      padding: 8,
      marginHorizontal: 20
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'

    }
});
