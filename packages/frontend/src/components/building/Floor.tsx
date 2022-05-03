import React from "react";
import { times } from "lodash";
import { createActionsHook } from "react-redux-actions-hook";

import { useAppSelector } from "../../hooks";
import Elevator from "./Elevator";
import { callElevator } from "../../features/elevators/actions";

const useActions = createActionsHook({
  callElevator,
});

interface FloorProps {
  number: number;
}

const Floor = ({ number }: FloorProps) => {
  const actions = useActions();

  const { elevators } = useAppSelector((state) => state.building);

  return (
    <div className="floor">
      <div className="floor-label nes-badge">
        <span className="is-primary">Floor # {number + 1}</span>
      </div>
      <button
        className="elevator-button"
        onClick={() => actions.callElevator({ floor: number })}
      >
        Call the elevator
      </button>
      <div className="elevators">
        {times(elevators, (index) => (
          <Elevator floorNumber={number} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Floor;
