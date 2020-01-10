import * as actionTypes from '../action';
const initialState={
    results:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id:new Date(),value:action.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const newArray=[...state.results]
            // newArray.splice(action.resId,1)
            const newArray=state.results.filter(result=>result.id!==action.resId)
                return {
                    ...state,
                    results:newArray
                }
        default:
            return state;
    }
   
}
export default reducer;