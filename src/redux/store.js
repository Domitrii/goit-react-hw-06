import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import { contactsReducer } from "./contactsSlice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const contactsConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
  };

  export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsConfig, contactsReducer), 
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)


