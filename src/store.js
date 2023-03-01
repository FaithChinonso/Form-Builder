import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import dataSlice from "./components/reducers/data-slice";
import uiSlice from "./components/reducers/ui-slice";
export function makeStore() {
  return configureStore({
    reducer: {
      data: dataSlice,
      ui: uiSlice,
    },
  });
}

const store = makeStore();
export default store;
