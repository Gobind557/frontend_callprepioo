import { useReducer } from "react";

export const useToggle = (initial) =>
  useReducer((current) => !current, initial);
