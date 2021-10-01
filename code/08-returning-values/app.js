let age = 32;
let userName = 'Max';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears() {
  return age - 18;
}

totalAdultYears = calculateAdultYears();
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears();

alert(totalAdultYears);

