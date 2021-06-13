export const calculation = {
  fetchRequiredDataFromArray,
  convertTimeToDate,
  sortBydate
};

function fetchRequiredDataFromArray(array, id) {
  const received_array = array.filter(item => {
    return item.userId != id;
  });
  const sending_array = array.filter(item => {
    return item.userId === id;
  });
  return {received_array: received_array, sending_array: sending_array};
}

function convertTimeToDate(time) {
  const date = new Date(time);
  return date.getHours() + '.' + date.getMinutes();
}
function sortBydate(array) {
  const newArray = array.sort((a, b) => {
    return convertTimeToDate(a.time) < convertTimeToDate(b.time);
  });
  return newArray;
}
