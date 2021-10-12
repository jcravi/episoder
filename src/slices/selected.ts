import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IListing } from "../components/Listings";

interface State {
  selected: Array<IListing>;
}

const initialState: State = {
  selected: [],
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addAction: (state, action: PayloadAction<IListing>) => {
      state.selected.push(action.payload);
    },
    removeAction: (state, action: PayloadAction<IListing>) => {
      const index = state.selected.indexOf(action.payload);
      const before = state.selected.slice(0, index);
      const after = state.selected.slice(index + 1, state.selected.length);
      return { selected: [...before, ...after] };
    },
  },
});

export const { addAction, removeAction } = selectedSlice.actions;

export const { reducer: selectedReducer } = selectedSlice;
