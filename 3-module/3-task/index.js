function camelize(str) {

  let arrSplit = str.split('-');
  let arrMap = arrSplit.map((item, index) => {
  if (index == 0) {
  return item;
  } else {
  return item[0].toUpperCase() + item.slice(1);
  }
  });
 let arrJoin = arrMap.join('');
 return arrJoin;
}