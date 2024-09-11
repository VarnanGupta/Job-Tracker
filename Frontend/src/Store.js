import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types to prevent non-serializable errors
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;


// Explanation
// Import Redux Persist Action Types:

// Import FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, and REGISTER from redux-persist to be ignored in the middleware.
// Customize serializableCheck:

// Update the middleware configuration to use getDefaultMiddleware with the serializableCheck option. This option will ignore actions from redux-persist that may contain non-serializable values.
// Ignore Redux Persist Actions:

// Add ignoredActions with the list of Redux Persist action types. This prevents Redux from throwing errors when non-serializable values are detected in these specific actions.