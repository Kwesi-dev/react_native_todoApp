import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
const TodoItem = ({ item, press }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>press(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333"/>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
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
        borderStyle: "dashed",
        flexDirection: "row",        
    },
    itemText:{
        marginLeft: 10,
    }
})
export default TodoItem;
