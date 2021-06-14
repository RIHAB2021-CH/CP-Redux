import { ADDNEW,DELETED,COMPLETED,EDITED } from "../constants/ActionTypes";
export const addnew = (payload) => {
    return {
      type: ADDNEW,
      payload,
    };
  };

  export const deleted = (payload) => {
    return {
      type: DELETED,
      payload,
    };
  };
  export const completed = (payload) => {
    return {
      type: COMPLETED,
      payload,
    };
  };
  export const edited = (payload) => {
    return {
      type: EDITED,
      payload,
    };
  };
  