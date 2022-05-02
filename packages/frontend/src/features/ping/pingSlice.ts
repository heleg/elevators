import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "ping",
  initialState: {
    pong: false,
  },
  reducers: {
    setPong(state) {
      state.pong = true;
    },
  },
});

export const { setPong } = actions;

export default reducer;
