import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import { filtersReducer } from "./filtersSlice";
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

 const store = configureStore({
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

export default store
