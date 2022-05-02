import { RootState } from "../../store";
import { RequestNames } from "./uiSlice";

export const isRequestActive = (name: RequestNames) => (state: RootState) =>
  state.ui.activeRequests.includes(name);
