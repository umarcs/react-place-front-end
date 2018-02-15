let initialState = {
   category : {}
}

export default function(state = initialState, action){
    switch(action.type){
        case  "GET-CATEGORIES" :
            return {
                ...state,
                category: action.payload
            };
            break;
        
    }

    return state;
}