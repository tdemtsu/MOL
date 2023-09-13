
// Query selectors 
const moreButton = document.querySelector("#morebutton");
const lessButton = document.querySelector("#lessbutton");
const scoreSpan = document.querySelector("#score");
const rightFullNameElement = document.querySelector("#right");
const pointsRightElement = document.querySelector("#points");
console.log("successfully set right element", pointsRightElement);
const leftFullNameElement = document.querySelector("#left");
const pointsLeftElement = document.querySelector("#pointz");


// Initialize global variables 
let pointsLeft = 0;
let pointsRight = 0;
let currentPoints = 0;

// Random integer function for i and z var
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// // Hardcoded object for use if api is not functional
// let players = [
//     { name: "Lebron James", average: "30.3", age: 37, },
//     { name: "Steph Curry", average: "25.5", age: 34, },
//     { name: "Giannis Antentekumpo", average: "29.9", age: 27, },
//     { name: "Luka Doncic", average: "28.4", age: 23, },
//     { name: "Ja Morant", average: "27.4", age: 22, },
//     { name: "Kevin Durant", average: "29.9", age: 33, },
//     { name: "Jason Tatum", average: "26.9", age: 24, },
//     { name: "LaMelo Ball", average: "20.1", age: 20, },
// ]
// let player = players[Math.floor(Math.random() * players.length == 8)];

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
  },
  params: { team: '1', season: '2021' },
};

const getStats = async () => {
  const response = await fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?team=1&season=2020', options);
  const data = await response.json();
  let i = getRandomInt(data.response.length);
  let z = getRandomInt(data.response.length);

  while (i === z || data.response[i].points === null || data.response[z].points === null) {
    // TODO: only fix the variable that matches the condition
    i = getRandomInt(data.response.length);
    z = getRandomInt(data.response.length);
  }

  let currentFirstName = data.response[i].player.firstname;
  let currentLastName = data.response[i].player.lastname;
  let currentFullName = currentFirstName + " " + currentLastName;
  console.log(currentFullName);
  pointsRight = data.response[i].points;
  console.log(points)

  // left (z)
  let currentFirstNamez = data.response[z].player.firstname;;
  let currentLastNamez = data.response[z].player.lastname;;
  let currentFullNamez = currentFirstNamez + " " + currentLastNamez;
  console.log(currentFullNamez);
  pointsLeft = data.response[z].points;
  console.log(pointsLeft)

  // Set innerHTML to player names & points
  rightFullNameElement.innerHTML = `${currentFullName}`;
  pointsRightElement.innerHTML = `${pointsRight}`;
  leftFullNameElement.innerHTML = `${currentFullNamez}`;
  pointsLeftElement.innerHTML = `${pointsLeft}`;
  pointsRightElement.classList.add("hidden");
}
getStats();

// Reset Prompts once button is pressed
moreButton.addEventListener("click", () => {
  // Check if playerRights points are more than playerLefts
  if (pointsRight >= pointsLeft) {
    console.log("More!");
    currentPoints += 1;
  } else {
    // TODO: mark as incorrect
    console.log("nope!");
    // alert("You are incorrect.");
  }
  console.log("currentPoints", currentPoints);
  scoreSpan.innerHTML = currentPoints;
  pointsRightElement.classList.remove("hidden");
  setTimeout({}, 8000);
  getStats();
});


lessButton.addEventListener("click", () => {
  console.log("points = ", pointsRight, pointsLeft);

  // Check if playerRights points are less than playerLeft
  if (pointsRight <= pointsLeft) {
    console.log("Less!");
    currentPoints = currentPoints + 1;
  } else {
    // TODO: mark as incorrect
    console.log("You are incorrect.");
    //alert("You are incorrect.");
  }
  console.log("currentPoints:", currentPoints);
  scoreSpan.innerHTML = currentPoints;
  console.log("Scorespan", scoreSpan);
  pointsRightElement.classList.remove("hidden");
  // delay
  setTimeout({}, 8000);
  getStats();
});

// Check if playerLeft points are more than playerRights
console.log("Less");
  // pointValue.classList.remove("hidden");
  // setTimeout(getStatSs(), 8000);

// Points System

// let pointsScore;
// if (localStorage.getItem("points") === null) {
//     pointsScore = currentPoints
// } else {
//     pointsScore = localStorage.getItem("points");
// }




