   import { createStore, combineReducers} from "redux";
     
   const mathReducer= (state = {
	   result :1,
	   lastValues :[],
	   username:"Nikunj"
   },action)=>{
	   switch(action.type){
		   case "ADD":
		   state={
			   ...state,
			   result:state.result +action.payload,
			   lastValues:[...state.lastValues,action.payload]
		   };
		   break;
		   case "SUB":
		   state={
			   ...state,
			   result:state.result-action.payload,
			   lastValues:[...state.lastValues,action.payload]
		   };
		   break;
	   }
	   return state;
   };const userReducer= (state = {
	   name :"Agarwal",
	   age :24
   },action)=>{
	   switch(action.type){
		   case "SET_NAME":
		   state={
			   ...state,
			   name:action.payload
			};
		   break;
		   case "SET_AGE":
		   state={
			   ...state,
			   age:action.payload
			  };
		   break;
	   }
	   return state;
   };
   
   const store = createStore(combineReducers({mathReducer,userReducer}));
   store.subscribe(()=>{
	   console.log("Store Changes",store.getState());
   });
   store.dispatch({type:"ADD",payload:10});
    store.dispatch({type:"ADD",payload:100});
	store.dispatch({type:"SET_AGE",payload:10});
   
				
	