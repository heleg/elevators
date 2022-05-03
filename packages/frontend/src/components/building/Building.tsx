import React, { useEffect } from "react";
import { times } from "lodash";
import { createActionsHook } from "react-redux-actions-hook";

import Floor from "./Floor";
import { useAppSelector } from "../../hooks";
import { getBuilding } from "../../features/building/actions";
import { getElevators } from "../../features/elevators/actions";

const useActions = createActionsHook({
  getBuilding,
  getElevators,
});

const Building = () => {
  const actions = useActions();
  const { floors } = useAppSelector((state) => state.building);

  useEffect(() => {
    actions.getBuilding();
    actions.getElevators();
  }, []);

  if (!floors) {
    return <p>Waiting for building ...</p>;
  }

  return (
    <div className="building">
      {times(floors, (number) => (
        <Floor number={floors - number - 1} key={number} />
      ))}
    </div>
  );
};

export default Building;
