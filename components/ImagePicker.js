import { Text, StyleSheet, View, Alert, Image } from "react-native";
import { useState } from "react";
import {launchCameraAsync, useCameraPermissions, PermissionStatus, MediaTypeOptions} from 'expo-image-picker';

import DeviceInput from "./ui/DeviceInput";
import { Colors } from "../constants/styles";
import IconTextButton from "./ui/IconTextButton";

function ImagePicker() {
  const [image, setImage] = useState(null);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  async function verifyCameraPermission(){
    if (cameraPermission.status != PermissionStatus.GRANTED) {
        const response = await requestCameraPermission();

        return  response.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
        Alert.alert('Insufficient Permissions!', 'You need to grand camera permissions to use this app.');
        return false;
    }

    return true;
  }

  async function onPressTakeImageHandler() {
    const hasPermissions = await verifyCameraPermission();

    if (!hasPermissions) {
        return;
    }

    const result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.6
    }).catch((message) => {
        Alert.alert('Error', 'Cann\'t make image right now.');
        console.log(message)
        return;
    });

    setImage(result.uri);
  }

  let renderComponent = <Text style={styles.emptyText}>No image picked yet.</Text>;

  if (image) {
    renderComponent = <Image style={styles.previewImage}  source={{uri:image}}/>;
  }

  return (
    <View>
      <DeviceInput>{renderComponent}</DeviceInput>
      <IconTextButton
        icon="camera"
        title="Take Image"
        onPress={onPressTakeImageHandler}
      />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  emptyText: {
    color: Colors.primaryDark,
    fontWeight: "bold",
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});
