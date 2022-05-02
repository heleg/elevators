import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RequestNames {
  PING = "PING",
}

type ActionWithRequestName = PayloadAction<{ name: RequestNames }>;

const { reducer, actions } = createSlice({
  name: "ui",
  initialState: {
    activeRequests: [] as RequestNames[],
  },
  reducers: {
    requestStart(state, action: ActionWithRequestName) {
      state.activeRequests.push(action.payload.name);
    },
    requestEnd(state, action: ActionWithRequestName) {
      state.activeRequests.filter((name) => name !== action.payload.name);
    },
  },
});

export const { requestStart, requestEnd } = actions;

export default reducer;
