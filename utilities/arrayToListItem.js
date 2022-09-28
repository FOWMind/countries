export const arrayToListItem = (arr) => {
  if (arr.length === 0) return arr[0]
  return arr.join(", ")
}
