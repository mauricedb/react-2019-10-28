export function updatePerson(propName, value) {
  return {
    type: "UPDATE-PERSON",
    payload: { propName, value }
  };
}
