let age = prompt('How old are you?');
let username;
if (age > 18) {
   username = prompt (`What's your name?`);
   if ((age > 25) && (username == `John`)) {
    alert(`Welcome, John!`);
} else {
    alert(`Who are you? I don't know you.`);
};
} else {
    alert `Go away`
};
