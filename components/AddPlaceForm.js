import { Alert, StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import Input from "./ui/Input";
import TextButton from "./ui/TextButton";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./ui/LocationPicker";
import { requestGeocodingByCoordinates } from "../api/map";
import { PlaceContext } from "../storage/placeContext";

function AddPlaceForm() {
  const [title, setTitle] = useState("");
  const [pickedImage, setPickedImage] = useState(null);
  const [pickedLocation, setPickedLocation] = useState(null);
  const { params } = useRoute();
  const navigation = useNavigation();
  const placeContext = useContext(PlaceContext);

  useEffect(() => {
    if (params) {
      setPickedLocation(params.pickedLocation);
    }
  }, [params]);

  async function onPressAddPlaceHandler() {
    if (!title && !pickedLocation && !pickedImage) {
      Alert.alert(
        "Fill the data",
        "To create new place you must add title, image and location!"
      );
      return;
    }

    try {
      const geocoding = await requestGeocodingByCoordinates(pickedLocation);
      const address = geocoding.results[0].formatted;
      placeContext.addPlace(title, address, pickedImage, pickedLocation);
      navigation.navigate('ListPlaces');
    } catch(error) {
      Alert.alert('Location problem', 'Something went wrong with picked location!')
    }
  }

  return (
    <View>
      <Input label="Title" value={title} onChangeValue={setTitle} />
      <ImagePicker setPickedImage={setPickedImage} />
      <LocationPicker
        selectedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
      />
      <TextButton onPress={onPressAddPlaceHandler} label="Add place" />
    </View>
  );
}

export default AddPlaceForm;

const styles = StyleSheet.create({});
