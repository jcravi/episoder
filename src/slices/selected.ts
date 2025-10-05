import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IListing } from "../components/Listings.tsx";

type State = Array<IListing>;

const initialState: State = [];

export const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addAction: (state, action: PayloadAction<IListing>) => {
      state.push(action.payload);
    },
    removeAction: (state, action: PayloadAction<IListing>) => {
      return state.filter((s) => s.id !== action.payload.id);
    },
  },
});

export const { addAction, removeAction } = selectedSlice.actions;

export const { reducer: selectedReducer } = selectedSlice;
