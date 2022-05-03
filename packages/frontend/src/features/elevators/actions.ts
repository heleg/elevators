import { createAction } from "@reduxjs/toolkit";

export const getElevators = createAction("GET_ELEVATORS");

export const callElevator = createAction<{ floor: number }>("CALL_ELEVATOR");
