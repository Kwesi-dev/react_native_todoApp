import { View, StyleSheet, TextInput, Button  } from "react-native";
import { useState } from "react";
const AddTodos = ({ changeTodos }) => {
    const [name, setName] = useState("")
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.name}
            placeholder="add todos..."
            onChangeText={(val)=>setName(val)}
        />
        <Button onPress={()=>changeTodos(name)} title="add todo" color="coral"/>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30
    },
    name:{
        padding: 10,
        marginBottom: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1

    }
})
export default AddTodos