import { END, eventChannel } from "redux-saga";

export function subscribeToSSE(eventSource: EventSource) {
  return eventChannel((emitter) => {
    eventSource.addEventListener("message", (event) => {
      emitter(JSON.parse(event.data));
    });

    return () => {
      eventSource.close();
      emitter(END);
    };
  });
}
