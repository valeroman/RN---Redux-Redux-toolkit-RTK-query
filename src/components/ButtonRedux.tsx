import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch } from '../store';
import { decrement, increment, reset } from '../store/slices/counter';
// import { decrement, increment, reset } from '../features/counter/CouterSlice';

export const ButtonRedux = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <TouchableOpacity
                onPress={ () => dispatch( increment() )}
                style={{ 
                    backgroundColor: 'black',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10  
                }}
            >
                <Text 
                    style={{ 
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Increment
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => dispatch( decrement() )}
                style={{ 
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10  
                }}
            >
                <Text
                    style={{ 
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Decrement
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => dispatch( reset() )}
                style={{ 
                    backgroundColor: 'black',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10  
                }}
            >
                <Text
                    style={{ 
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Reset
                </Text>
            </TouchableOpacity>
        </>
    )
}
