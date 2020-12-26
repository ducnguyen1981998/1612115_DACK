export const reducer = (state, action) => {
    switch(action.type){
        case "REQUEST_LIST_CATEGORY_BY_TOP_NEW":
            return { ...state, isLoading: true, isDone: false}
        case "REQUEST_LIST_CATEGORY_BY_TOP_NEW_SUCCESS":
            return { ...state, category: action.data.payload, isLoading:false, isDone: true }
        default:
            throw new Error();

    }
};