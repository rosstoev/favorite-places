import { View, Text, StyleSheet } from "react-native";
import AddPlaceForm from "../components/AddPlaceForm";

function AddPlaceScreen() {
  return (
    <View style={styles.container}>
      <AddPlaceForm />
    </View>
  );
}

export default AddPlaceScreen;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
});
