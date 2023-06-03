import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function DeviceInput({ emptyLabel }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{emptyLabel}</Text>
    </View>
  );
}

export default DeviceInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    minHeight: 200,
    backgroundColor: Colors.primaryLight,
    borderRadius: 4,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    color: Colors.primaryDark,
    fontWeight: "bold",
  },
});
