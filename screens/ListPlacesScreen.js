import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "../constants/styles";
import { useContext, useLayoutEffect, useState, useEffect } from "react";

import { PlaceContext } from "../storage/placeContext";

import ListItem from "../components/ListItem";
import IconButton from "../components/ui/IconButton";
import { fetchPlaces } from "../util/database";

function ListPlacesScreen({ navigation }) {
  const placeContext = useContext(PlaceContext);
  const [places, setPlaces] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={onPressAddFavoritePlaceHandler}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function getPlaces() {
      const places = await fetchPlaces();
      setPlaces(places);
    }
    getPlaces();
  }, []);

  function onPressAddFavoritePlaceHandler() {
    navigation.navigate("AddPlace");
  }

  if (places == null) {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListTItle}>
          No places added yeat - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => <ListItem place={item} />}
        keyExtractor={(place) => place.id}
      />
    </View>
  );
}

export default ListPlacesScreen;

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListTItle: {
    color: Colors.primaryLight,
    fontSize: 16,
  },
  container: {
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "center",
  },
});
