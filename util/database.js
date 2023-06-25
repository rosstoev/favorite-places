import * as SQLite from "expo-sqlite";
import { Place } from "../models/Place";

const database = SQLite.openDatabase("favoritePlaces.db");

export function initTables() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY NOT NULL,
           title TEXT,
           imagePath TEXT,
           address TEXT,
           latitude REAL,
           longitute REAL
        )`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imagePath, address, latitude, longitute) VALUES(?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imagePath,
          place.address,
          place.location.lat,
          place.location.long,
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          const places = [];
          for (const data of result.rows._array) {
            const place = new Place(
              data.id,
              data.title,
              data.address,
              data.imagePath,
              { lat: data.latitude, long: data.longitute }
            );
            places.push(place);
          }

          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlace(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places WHERE id = ?",
        [id],
        (_, result) => {
          const data = result.rows._array[0];
          const place = new Place(
            data.id,
            data.title,
            data.address,
            data.imagePath,
            { lat: data.latitude, long: data.longitute }
          );

          resolve(place);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}
