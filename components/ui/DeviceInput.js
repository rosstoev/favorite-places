import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function DeviceInput({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default DeviceInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 200,
    backgroundColor: Colors.primaryLight,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  }
});
