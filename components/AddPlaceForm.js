import { StyleSheet, View } from "react-native";

import Input from "./ui/Input";
import { useState } from "react";
import DeviceInput from "./ui/DeviceInput";
import IconTextButton from "./ui/IconTextButton";
import TextButton from "./ui/TextButton";
import ImagePicker from "./ImagePicker";

function AddPlaceForm() {
  const [title, setTitle] = useState("");

  function onPressLocateUserHandler() {}

  function onPressPickedOnMapHandler() {}

  function onPressAddPlaceHandler(){}

  return (
    <View>
      <Input label="Title" value={title} onChangeValue={setTitle} />
      <ImagePicker />
      <DeviceInput/>
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
      <TextButton onPress={onPressAddPlaceHandler} label="Add place" />
    </View>
  );
}

export default AddPlaceForm;

const styles = StyleSheet.create({
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
});
