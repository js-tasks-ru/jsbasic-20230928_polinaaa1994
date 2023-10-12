function factorial(n) {
  var newNumber = 1;
    for (n;n!=0;){
        newNumber = newNumber * n--;
    }
    return newNumber;
}
