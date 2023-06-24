import { createContext, useState } from "react";
import { PLACES } from "../data/places";
import { Place } from "../models/Place";

export const PlaceContext = createContext({
    places: [],
    addPlace: (title, address, imagePath, location) => {},
    removePlace: (id) => {}
})

function PlaceContextProvider({children}) {
    const [places, setPlaces] = useState(PLACES)


    function addPlace(title, address, imagePath, location){

        const lastId = places[places.length - 1];
        const index = parseInt(lastId[1]);
        const newId = `p${index + 1}`;
        const place = new Place(newId, title, address, imagePath, location);

        setPlaces([...places, place]);
    }

    function removePlace(id){
        const newPlacesList = places.filter(place => place.id !== id);
        setPlaces(newPlacesList);
    }

    const value = {
        places: places,
        addPlace: addPlace,
        removePlace: removePlace
    }

    return (
        <PlaceContext.Provider  value={value}>
            {children}
        </PlaceContext.Provider>
    )
}

export default PlaceContextProvider;