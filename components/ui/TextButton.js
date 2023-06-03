import { Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function TextButton({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryDark,
    borderRadius: 4,
    padding: 10,
    alignItems: "center"
  },
  label: {
    color: Colors.primaryLight,
    fontSize: 16,
  },
});
