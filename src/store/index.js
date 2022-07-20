import { createStore } from "redux";

function tasks(state = [], { type, payload }) {
  switch (type) {
    case "ADD_TASKS":
      return state.concat(payload);

    default:
      return state;
  }
}

const Store = createStore(tasks);

export default Store;
