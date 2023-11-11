function makeFriendsList(friends) {
  let ul = document.createElement("UL");
    ul.insertAdjacentHTML('beforeEnd', friends.map(items => `<li>${items.firstName} ${items.lastName}</li>`).join(""));
    return ul
} // ваш код...
