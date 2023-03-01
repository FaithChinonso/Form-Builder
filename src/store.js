import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
export function makeStore() {
  return configureStore({
    reducer: {},
  });
}

const store = makeStore();
export default store;
