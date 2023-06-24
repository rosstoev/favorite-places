import { useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";
import { useRoute } from "@react-navigation/native";

function Map({ navigation, route }) {
  const initLocation = route.params && route.params.initLocation;
  const [location, setLocation] = useState(initLocation);
  const region = {
    latitude: initLocation ? initLocation.lat : 42.846621,
    longitude: initLocation ? initLocation.long : 25.312065,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onSaveLocationHandler = useCallback(() => {
    if (!location) {
      Alert.alert(
        "Missing location",
        "First you have to pick location by pressing the screen"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLocation: location,
    });
  }, [navigation, location]);

  useEffect(() => {
    if (!initLocation) {
      navigation.setOptions({
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              color={tintColor}
              icon="save"
              size={24}
              onPress={onSaveLocationHandler}
            />
          );
        },
      });
    }
  }, [navigation, onSaveLocationHandler, initLocation]);

  function onPressMapHandler({ nativeEvent }) {
    const latitude = nativeEvent.coordinate.latitude;
    const longitude = nativeEvent.coordinate.longitude;
    setLocation({ lat: latitude, long: longitude });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={onPressMapHandler}
    >
      {location && (
        <Marker
          coordinate={{ latitude: location.lat, longitude: location.long }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
