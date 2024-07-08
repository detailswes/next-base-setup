import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice, { getAccountDetails } from "@/features/auth";
import toastSlice from "@/features/toast";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
    [getAccountDetails.reducerPath]: getAccountDetails.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(getAccountDetails.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
