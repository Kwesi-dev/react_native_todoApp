import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react'
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';
export default function App() {
  const [todos, setTodos] = useState([
    {name: 'buy a coffee', key: '1'},
    {name: 'complete react native', key: '2'},
    {name: 'get a wirless mouse and keyboard', key: '3'},
    {name: 'buy a new laptop', key: '4'},
  ])

  const press = (key)=>{
     setTodos((prevTodos)=> prevTodos.filter(item=> item.key != key))
  }
  const changeTodos = (name)=>{
    setTodos((prevTodos)=>{
      return[
        {name: name, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodos changeTodos={changeTodos}/>
        <FlatList
          data={todos}
          renderItem={({ item })=>(
            <TodoItem item={item} press={press}/>
          )}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    marginTop: 50,
  }
});
