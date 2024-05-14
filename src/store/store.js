import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carsReducer } from "./cars/carsSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoriteItems"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(favoritePersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
