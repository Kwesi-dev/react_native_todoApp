import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    if(name.length > 3){
      setTodos((prevTodos)=>{
        return[
          {name: name, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert("Oops!", "todo name must be alteast 3 characters", [{text: "understood"}])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodos changeTodos={changeTodos}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item })=>(
                <TodoItem item={item} press={press}/>
                )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    marginTop: 50,
    flex: 1,
  },
  list:{
    flex: 1
  }

});
