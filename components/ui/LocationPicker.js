import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";

import DeviceInput from "./DeviceInput";
import IconTextButton from "./IconTextButton";
import { Colors } from "../../constants/styles";
import { getStaticMapUrl, requestStaticMap } from "../../api/map";

function LocationPicker() {
  const [location, setLocation] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [permissions, requestLocationPermission] = useForegroundPermissions();

  async function verifiLocationPermission() {
    if (permissions.status !== PermissionStatus.GRANTED) {
      const response = await requestLocationPermission();
      return response.granted;
    }

    if (permissions.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You have to allow the app to picked location in order to work properly."
      );
      return false;
    }

    return true;
  }

  async function onPressLocateUserHandler() {
    const verification = await verifiLocationPermission();

    if (!verification) {
      return;
    }

    try {
      const result = await getCurrentPositionAsync();
      setLocation({
        lat: result.coords.latitude,
        long: result.coords.longitude,
      });
    } catch (error) {
      Alert.alert("Alert", "The application cann't get your location");
      console.log(error);
    }
  }

  useEffect(() => {
    if (location) {
      const imageUrl = getStaticMapUrl(location);
      setImageUrl(imageUrl);
    }
  }, [location]);

  function onPressPickedOnMapHandler() {}

  let previewComponent = (
    <Text style={styles.emptyText}>No picked location yet.</Text>
  );

  if (imageUrl) {
    previewComponent = (
      <Image style={styles.imagePreview} source={{ uri: imageUrl }} />
    );
  }

  return (
    <View>
      <DeviceInput>{previewComponent}</DeviceInput>
      <View style={styles.rowButtons}>
        <IconTextButton
          icon="location"
          title="Locate User"
          onPress={onPressLocateUserHandler}
        />
        <IconTextButton
          icon="map"
          title="Pick on Map"
          onPress={onPressPickedOnMapHandler}
        />
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  emptyText: {
    color: Colors.primaryDark,
    fontWeight: "bold",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
  },
});
