import React from "react";
import { createActionsHook } from "react-redux-actions-hook";

import { sendPing } from "../features/ping/actions";
import { isRequestActive } from "../features/ui/selectors";
import { useAppSelector } from "../hooks";
import { RequestNames } from "../features/ui/uiSlice";

const useActions = createActionsHook({
  sendPing,
});

const PingButton = () => {
  const actions = useActions();

  const isSubmitting = useAppSelector(isRequestActive(RequestNames.PING));
  const isPong = useAppSelector((state) => state.ping.pong);

  const text = isPong ? "Pong!" : isSubmitting ? "..." : "Ping!";

  return (
    <button
      disabled={isSubmitting || isPong}
      onClick={() => actions.sendPing()}
    >
      {text}
    </button>
  );
};

export default PingButton;
