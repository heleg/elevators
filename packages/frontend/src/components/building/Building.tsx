import React from "react";
import { times } from "lodash";

import { useAppSelector } from "../../hooks";
import Floor from "./Floor";

const Building = () => {
  const { floors } = useAppSelector((state) => state.building);

  return (
    <div className="building">
      {times(floors, (number) => (
        <Floor number={floors - number} key={number} />
      ))}
    </div>
  );
};

export default Building;
