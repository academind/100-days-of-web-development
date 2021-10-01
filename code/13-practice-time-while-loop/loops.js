for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm('Do you want to quit?');
}

console.log('Done!');