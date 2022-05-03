import React from "react";
import { useSetState, useUpdateEffect } from "react-use";
import cx from "classnames";

import { useAppSelector } from "../../hooks";
import {
  Elevator as ElevatorInterface,
  ElevatorStates,
} from "../../features/elevators/elevatorsSlice";

interface ElevatorProps {
  index: number;
  floorNumber: number;
}

const getDirectionSign = (elevator?: ElevatorInterface) =>
  elevator?.state === ElevatorStates.UP
    ? "↑"
    : elevator?.state === ElevatorStates.DOWN
    ? "↓"
    : "•";

const Elevator = ({ index, floorNumber }: ElevatorProps) => {
  const [state, setState] = useSetState({
    isStoppedOnCurrentFloor: false,
  });

  const elevator = useAppSelector((state) => state.elevators[`elv${index}`]);

  const currentFloor =
    elevator?.floor !== undefined ? elevator.floor + 1 : undefined;

  useUpdateEffect(() => {
    if (elevator?.state !== ElevatorStates.STOPPED) {
      return;
    }

    setState({ isStoppedOnCurrentFloor: elevator.floor === floorNumber });
  }, [elevator?.state]);

  return (
    <div
      className={cx("elevator-container", {
        "current-floor": state.isStoppedOnCurrentFloor,
      })}
    >
      <div className="elevator-floor-number">
        <span className="elevator-floor-sign">
          {getDirectionSign(elevator)}
        </span>
        <span>&thinsp;</span>
        {currentFloor ?? <span>&nbsp;</span>}
      </div>
      <div className="elevator">
        <div className="elevator-door">
          <div className="elevator-door-index">{index + 1}</div>
        </div>
        <div className="elevator-door" />
      </div>
    </div>
  );
};

export default Elevator;
