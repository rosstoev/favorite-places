import { useLayoutEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../constants/styles";
import IconTextButton from "../components/ui/IconTextButton";


function PlaceDetailsScreen({route, navigation}){
    const {place} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: place.title
        })
    }, [navigation, place])

    function onPressMapHandler() {

    }

    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: place.imagePath }} />
        <View style={styles.infoSection}>
            <Text style={styles.address}>{place.address}</Text>
            <IconTextButton onPress={onPressMapHandler} title="View on Map" icon="map"/>
        </View>
    </View>
    
}

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 300
    },
    infoSection: {
        marginTop: 20,
    },
    address: {
        color: Colors.secondaryLight,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    }
})