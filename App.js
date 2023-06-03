import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import ListPlacesScreen from "./screens/ListPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import PlaceDetailsScreen from "./screens/PlaceDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants/styles";
import PlaceContextProvider from "./storage/placeContext";

const NativeStack = createNativeStackNavigator();

export default function App() {
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
              name="Your Favorite Places"
              component={ListPlacesScreen}
            />
            <NativeStack.Screen
              name="Add a new Place"
              component={AddPlaceScreen}
            />
            <NativeStack.Screen
              name="Place details"
              component={PlaceDetailsScreen}
            />
          </NativeStack.Navigator>
        </NavigationContainer>
      </PlaceContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
