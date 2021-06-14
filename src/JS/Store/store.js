import { createStore } from "redux";
import reducerTasks from "../Reducers/reducerTasks";
const store = createStore(
    reducerTasks,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;