function showSalary(users, age) {
  let filterAge = users.filter((items) => {
    return items.age <= age
  });
  let mapArr = filterAge.map((items) => {
    return `${items.name}, ${items.balance}`; 
  });
  return mapArr.join("\n")  // ваш код...
}
