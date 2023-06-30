import mitt from "mitt";

export type Events = {
  // use to send errors
  error: string;
  // use to send success
  success: string;
  // events to open modal
  "open:join": boolean;
};

const emitter = mitt<Events>();

export const useEmitter = () => {
  return emitter;
};
