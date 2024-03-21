

const formReducers = (state: [], action) =>{
    switch (action.type) {
        case "Add": {
            return [...state, action.payload];
        }
        case "Delete": {
            return state.filter((item,index) => index !== action.payload);
        }
        case "Update": {
            return (state || []).map((item, index) => {
                if (index === action.payload.editIndex) {
                    return action.payload.record;
                } else return item;
            })
        }
       
        default: {
            return state || [];
        }
        
    }
}
export { formReducers };