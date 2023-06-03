import { StyleSheet, View } from "react-native";

import Input from "./ui/Input";
import { useState } from "react";
import DeviceInput from "./ui/DeviceInput";
import IconTextButton from "./ui/IconTextButton";
import TextButton from "./ui/TextButton";

function AddPlaceForm() {
  const [title, setTitle] = useState("");

  function onPressTakeImageHandler() {}

  function onPressLocateUserHandler() {}

  function onPressPickedOnMapHandler() {}

  function onPressAddPlaceHandler(){}

  return (
    <View>
      <Input label="Title" value={title} onChangeValue={setTitle} />
      <DeviceInput emptyLabel="No image taken yet." />
      <IconTextButton
        icon="camera"
        title="Take Image"
        onPress={onPressTakeImageHandler}
      />
      <DeviceInput emptyLabel="No location picked yet." />
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