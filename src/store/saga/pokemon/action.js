import { SystemTypes } from "./types";


export const system = (payload) => ({
  type: SystemTypes.SYSTEM,
  payload
});
export const systemSuccess = (payload) => ({
  type: SystemTypes.SYSTEM_SUCCESS,
  payload
});
export const systemFailure = (payload) => ({
  type: SystemTypes.SYSTEM_FAILURE,
  payload
});
