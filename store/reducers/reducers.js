const intial_state = {
    storeName: "Company's Name",
};
const reducer = (state = intial_state, action) => {
    if (action.type === "GET_NEWS_LIST") {
        return {
            ...state,
            storeName: "i'am groot",
        };
    }
    return state;
};

export default reducer;
