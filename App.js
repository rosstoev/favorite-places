import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import ListPlacesScreen from "./screens/ListPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import PlaceDetailsScreen from "./screens/PlaceDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants/styles";
import PlaceContextProvider from "./storage/placeContext";
import Map from "./screens/Map";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { initTables } from "./util/database";

const NativeStack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isDbInitialized, setDbInitialize] = useState(false);

  async function hideLoadingScreen() {
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    initTables()
      .then((result) => {
        setDbInitialize(true);
        hideLoadingScreen();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isDbInitialized]);

  return (
    <>
      <StatusBar style="auto" />
      <PlaceContextProvider>
        <NavigationContainer>
          <NativeStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.secondaryLight,
              },
              headerTintColor: Colors.primaryDark,
              contentStyle: {
                backgroundColor: Colors.primaryDark,
              },
            }}
          >
            <NativeStack.Screen
              name="ListPlaces"
              component={ListPlacesScreen}
              options={{
                title: "Your Favorite Places",
              }}
            />
            <NativeStack.Screen
              name="AddPlace"
              component={AddPlaceScreen}
              options={{ title: "Add new place" }}
            />
            <NativeStack.Screen
              name="PlaceDetails"
              component={PlaceDetailsScreen}
              options={{
                title: "Place details",
              }}
            />
            <NativeStack.Screen
              name="Map"
              component={Map}
              options={{ title: "Map" }}
            />
          </NativeStack.Navigator>
        </NavigationContainer>
      </PlaceContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
