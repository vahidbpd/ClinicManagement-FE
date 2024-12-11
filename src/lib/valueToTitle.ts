type DataArray = {
  title: string;
  value: string;
}[];
export function getTitleByValue(value: string, dataArray: DataArray) {
  const foundItem = dataArray.find((item) => item.value === value);
  return foundItem ? foundItem.title : null;
}
