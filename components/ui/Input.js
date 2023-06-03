import { Text, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ label, value, onChangeValue }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  label: {
    color: Colors.secondaryLight,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 7
  },
  input: {
    backgroundColor: Colors.primaryLight,
    padding: 8,
    fontSize: 16,
    borderBottomColor: Colors.secondaryDark,
    borderBottomWidth: 3,
  },
});
