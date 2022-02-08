import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
const TodoItem = ({ item, press }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>press(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 30,
    },
    item:{
        borderColor: "#bbb",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderStyle: "dashed"        
    }
})
export default TodoItem;
