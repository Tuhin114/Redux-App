const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    // Typo: Corrected "deposite" to "deposit"
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
