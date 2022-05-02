import { createSlice } from "@reduxjs/toolkit";

const { reducer } = createSlice({
  name: "building",
  reducers: {},
  initialState: {
    floors: 10,
    elevators: 3,
  },
});

export default reducer;
