let age = prompt('How old are you?');
if (age > 18) {
   let username = prompt (`What's your name?`);
   if ((age > 25) && (username == `John`)) {
    alert(`Welcome, John!`);
} else {
    alert(`Who are you? I don't know you.`);
};
} else {
    alert `Go away`
};
