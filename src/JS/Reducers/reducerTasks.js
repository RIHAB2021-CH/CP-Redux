import { ADDNEW,DELETED,COMPLETED, EDITED} from "../constants/ActionTypes";
const intialState =  [{id:Math.random(),
      description:"Bouton EDIT A REPARER",
    isDone:true,},{id:Math.random(),
      description:"Task 2",
    isDone:false,},
    {id:Math.random(),
      description:"Task 3",
    isDone:true,}];
  const reducerTasks = (state = intialState, action) => {
      if (action.type === ADDNEW) {
        return [...state,action.payload];
      }
      else if (action.type === DELETED) {
        return state.filter((el)=>el.id !== action.payload);
      }
      else if (action.type === COMPLETED) {
        return (state.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      ));
      }
      else if (action.type===EDITED){
       return state.map((el) =>
        el.id === action.payload.id ? { ...el, description: action.payload.description } : el
      );
      }
      else return state
   
  };
  
  export default reducerTasks;
  