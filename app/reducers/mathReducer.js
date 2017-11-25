const mathReducer = (state = {
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
   };
export default mathReducer;