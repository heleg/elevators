import React from "react";
import { useAppSelector } from "../../hooks";
import { times } from "lodash";
import Elevator from "./Elevator";

interface FloorProps {
  number: number;
}

const Floor = ({ number }: FloorProps) => {
  const { elevators } = useAppSelector((state) => state.building);

  return (
    <div className="floor">
      <div className="floor-label nes-badge">
        <span className="is-primary">Floor # {number}</span>
      </div>
      <button className="elevator-button">Call the elevator</button>
      <div className="elevators">
        {times(elevators, () => (
          <Elevator />
        ))}
      </div>
    </div>
  );
};

export default Floor;
