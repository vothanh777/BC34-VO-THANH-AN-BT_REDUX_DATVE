const stateDefault = {
  data: [{ id: 1 }, { id: 2 }],
};

export const demoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      let lstData = state.data;
      lstData.push({ id: action.payload });
      state.data = lstData;

      return { ...state };

    default:
      return { ...state };
  }
};
