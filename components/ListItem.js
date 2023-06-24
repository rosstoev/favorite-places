import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

function ListItem({ place }) {
    const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate('PlaceDetails', {
        place : place
    });
  }

  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      <Image style={styles.image} source={{ uri: place.imagePath }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: "row",
    backgroundColor: Colors.secondaryLight,
    borderRadius: 4,
  },
  image: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    width: "70%"
  }
});
