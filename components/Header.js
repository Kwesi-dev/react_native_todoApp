import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>My Todos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'coral',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
    },
    headerText:{
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20
    }
})
export default Header;
