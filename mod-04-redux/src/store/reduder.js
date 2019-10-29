export function personReducer(
  oldState = { firstName: "maurice", lastName: "de Beijer" },
  action
) {
  console.log(oldState, action);

  switch (action.type) {
    case "UPDATE-PERSON":
      return { ...oldState, [action.payload.propName]: action.payload.value };
    default:
      return oldState;
  }
}
