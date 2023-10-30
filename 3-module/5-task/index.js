function getMinMax(str) {
  let arr = str.split(' ');
  let filterArr = arr.filter((items) => {
  return isFinite(items) 
});
  let mapArr = filterArr.map((items) => {
  return Number(items) 
});
return {
  min: Math.min(...mapArr),
  max: Math.max(...mapArr),
}// ваш код...
}
