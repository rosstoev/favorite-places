import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "../constants/styles";
import { useContext } from "react";

import { PlaceContext } from "../storage/placeContext";

import ListItem from "../components/ListItem";

function ListPlacesScreen() {
  const placeContext = useContext(PlaceContext);
  const places = placeContext.places;

  if (places == null) {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListTItle}>No places added yeat - start adding some!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={places}
        renderItem={({item}) => <ListItem  place={item}/>}
        keyExtractor={place => place.id}
      />
    </View>
  );
}

export default ListPlacesScreen;

const styles = StyleSheet.create({
    emptyListContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyListTItle: {
        color: Colors.primaryLight,
        fontSize: 16,
    },
    container: {
      alignItems: "center"
    }
})
