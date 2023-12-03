function highlight(table) {
  let atrTrue = table.querySelectorAll('[data-available = "true"]');
    for (let classTrue of atrTrue) {
     classTrue.parentNode.classList.add('available')
    }

  let atrFalse = table.querySelectorAll('[data-available = "false"]');
    for (let classFalse of atrFalse) {
     classFalse.parentNode.classList.add('unavailable')
    }
  let td = table.querySelectorAll('td');
   for (let hiddenAtr of td) {
   if (hiddenAtr.hasAttribute('data-available')) {
   hiddenAtr.parentNode.hidden = false;
    } else {
   hiddenAtr.parentNode.hidden = true;
}
}

   for (let male of td) {    
   if (male.textContent === 'm') {
   male.parentNode.classList.add('male')
}
}
   for (let female of td) {    
   if (female.textContent === 'f') {
  female.parentNode.classList.add('female')
}
}

   for (let age of td) {    
   if (age.textContent < '18') {
  age.parentNode.style="text-decoration: line-through"
}
}
  // ваш код...
}
