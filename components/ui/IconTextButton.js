import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";

function IconTextButton({ onPress, title, icon }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name={icon} size={18} color={Colors.secondaryLight}/>  
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default IconTextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 7,
    borderColor: Colors.secondaryLight,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    paddingLeft: 5,
    color: Colors.secondaryLight
  }
});
