function greetUser(greetingPrefix, userName = 'user') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

greetUser('Hi', 'Max');
greetUser('Hello');