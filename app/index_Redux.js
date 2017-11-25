   import { createStore } from "redux";
   
   const initialState ={
	   result :1,
	   lastValues :[],
	   username:"Nikunj"
   };
   
   const reducer= (state = initialState,action)=>{
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
   };
   const store = createStore(reducer);
   store.subscribe(()=>{
	   console.log("Store Changes",store.getState());
   });
   store.dispatch({type:"ADD",payload:10});
    store.dispatch({type:"ADD",payload:100});
   
				
	