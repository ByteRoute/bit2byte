import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import ownerReducer from "./ownerSlice";
import auxiliaryReducer from "./auxiliarySlice";
import counterReducer from "./counterSlice";
import fontReducer from "./fontSlice";
import themeReducer from "./ThemeSlices/themeSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for Redux persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Combine reducers into root reducer
const rootReducer = combineReducers({
  user: userReducer,
  auxiliary: auxiliaryReducer,
  owner: ownerReducer,
});

// Create persisted reducer using persistReducer from redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // all the reducers are kept here
  reducer: {
    persistedReducer,
    counter: counterReducer,
    font: fontReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
