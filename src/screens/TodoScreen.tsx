import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGetTodoByIdQuery, useGetTodosQuery } from '../store/apis';

export const TodoScreen = () => {

    const [todoId, setTodoId] = useState(1);

    // const { data: todos = undefined, isLoading,  isFetching } = useGetTodosQuery([]);
    // console.log('--[data]--',todos);
    const { data: todo = undefined, isLoading,  isFetching } = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const previewTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ styles.container }>
                    <Text style={ styles.title }>Todos -RTK Query</Text>
                    <View style={ styles.containerTodo }>
                        {
                            todo !== null &&
                            todo !== undefined &&
                            <View style={{ flexDirection: 'row', width: '80%' }}>
                                {/* <Text style={ styles.status }>{ todo[0].completed ? 'Completed' : 'Pending' }</Text> */}
                                <Text style={{ textAlign: 'justify' , fontSize: 14 }}> - { JSON.stringify(todo) }</Text>
                            </View>

                        }
                    </View>
                    {/* {
                        todos !== null &&
                        todos !== undefined &&
                        todos.map((todo, index) => (
                            console.log('todo-->>', todo),
                            <View style={ styles.containerTodo } key={todo.id}>
                                <View style={{ flexDirection: 'row', width: '80%' }}>
                                    <Text style={ styles.status }>{ todo.completed ? 'Completed' : 'Pending' }</Text>
                                    <Text style={{ textAlign: 'justify' , fontSize: 14 }}> - { todo.title }</Text>
                                </View>
                            </View>
                        ))
                    } */}
                </View>
                <View>
                <TouchableOpacity
                        onPress={ () => previewTodo() }
                    >
                        <Text>Preview Todo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => nextTodo() }
                    >
                        <Text>Next Todo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>  
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerTodo: {
        flexDirection: 'row',
        marginVertical: 5,
        // paddingHorizontal: 20
    },
    status: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
