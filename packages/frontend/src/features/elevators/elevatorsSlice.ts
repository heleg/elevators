import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keyBy } from "lodash";

export enum ElevatorStates {
  STOPPED = "stopped",
  DOWN = "down",
  UP = "up",
}

export interface Elevator {
  id: string;
  floor: number;
  state: ElevatorStates;
  targetFloor?: number;
}

type ElevatorsState = Record<string, Elevator>;

const { reducer, actions } = createSlice({
  name: "elevators",
  initialState: {} as ElevatorsState,
  reducers: {
    getElevatorsSuccess: {
      reducer: (
        state,
        action: PayloadAction<{ elevators: ElevatorsState }>
      ) => {
        return action.payload.elevators;
      },
      prepare: (elevators: Elevator[]) => {
        return {
          payload: {
            elevators: keyBy(elevators, "id"),
          },
        };
      },
    },
    updateElevator(state, action: PayloadAction<{ elevator: Elevator }>) {
      state[action.payload.elevator.id] = action.payload.elevator;
    },
  },
});

export const { getElevatorsSuccess, updateElevator } = actions;

export default reducer;
