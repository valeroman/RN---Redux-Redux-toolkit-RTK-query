import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useAppSelector } from '../store';
import { ButtonRedux } from './ButtonRedux';

export const Counter = () => {

    const { value } = useAppSelector( state => state.counter );

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Counter</Text>
                <Text style={{ fontSize: 62, color: 'green', fontWeight: 'bold' }}>{ value }</Text>
            </View>
            <View>
                <ButtonRedux />
            </View>
        </SafeAreaView>
    )
}
