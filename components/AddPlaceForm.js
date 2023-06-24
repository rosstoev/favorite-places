import { StyleSheet, View } from "react-native";

import Input from "./ui/Input";
import { useState } from "react";
import TextButton from "./ui/TextButton";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./ui/LocationPicker";

function AddPlaceForm() {
  const [title, setTitle] = useState("");

  function onPressAddPlaceHandler(){}

  return (
    <View>
      <Input label="Title" value={title} onChangeValue={setTitle} />
      <ImagePicker />
      <LocationPicker />
      <TextButton onPress={onPressAddPlaceHandler} label="Add place" />
    </View>
  );
}

export default AddPlaceForm;

const styles = StyleSheet.create({
  
});
