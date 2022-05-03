import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BuildingState {
  floors: number;
  elevators: number;
}

const { reducer, actions } = createSlice({
  name: "building",
  reducers: {
    getBuildingSuccess(state, action: PayloadAction<BuildingState>) {
      return action.payload;
    },
  },
  initialState: {
    floors: 0,
    elevators: 0,
  } as BuildingState,
});

export const { getBuildingSuccess } = actions;

export default reducer;
