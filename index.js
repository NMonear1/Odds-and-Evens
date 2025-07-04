const $app = document.querySelector("#app");
const $div = document.createElement("div");

const bankArr = [];
const oddsArr = [];
const evensArr = [];

const resetForm = () => {
  document.querySelector("#reset").reset();
};

const addrandNum = (e) => {
  e.preventDefault();

  const $bank = document.querySelector("#bank");

  const min = -20;
  const max = 100;
  const amount = 10;

  for (let i = 0; i < amount; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    bankArr.push(randomNum);
  }

  $bank.value = bankArr.join(", ");
  console.log(bankArr);
};

const sortAll = (e) => {
  e.preventDefault();

  const $odds = document.querySelector("#odds");
  const $evens = document.querySelector("#evens");
  const $bank = document.querySelector("#bank");

  for (let i = 0; i < bankArr.length; i++) {
    const number = bankArr[i];
    if (number % 2 === 0) {
      evensArr.push(number);
      $evens.value = evensArr.join(", ");
    } else {
      oddsArr.push(number);
      $odds.value = oddsArr.join(", ");
    }
  }

  $bank.value = "";
};

const sortOne = (e) => {
  e.preventDefault();

  const $odds = document.querySelector("#odds");
  const $evens = document.querySelector("#evens");
  const $bank = document.querySelector("#bank");

  if (bankArr.length === 0) return;
  const randomIndex = Math.floor(Math.random() * bankArr.length);
  const number = bankArr[randomIndex];

  bankArr.splice(randomIndex, 1);

  if (number % 2 === 0) {
    evensArr.push(number);
    $evens.value = evensArr.join(", ");
  } else {
    oddsArr.push(number);
    $odds.value = oddsArr.join(", ");
  }

  $bank.value = bankArr.join(", ");
};

const addBank = (e) => {
  e.preventDefault();

  const bankValue = document.getElementById("numInput").value;
  const $numInput = document.querySelector("#numInput");
  const $bank = document.querySelector("#bank");

  if (bankValue === "") {
    alert("Please enter a valid number");
    return;
  }

  bankArr.push(bankValue);
  $numInput.value = "";

  $bank.value = bankArr;
  console.log(bankArr);
};

const form = () => {
  const $form = document.createElement("form");
  $form.style.width = "60%";
  $form.style.margin = "0 auto";
  $form.innerHTML = `

  <div class="form-group">
    <label for="bankInput">Add a number to the Bank</label>
    <input type="number" id ="numInput">
    <button type="submit" id="addButton">Add number</button>
    <button type="submit" id="addrandNum">Add some random numbers!!</button>
    <button id="sort1">Sort 1</button>
    <button id="sortAll">Sort All</button>
  </div>

  <div class="form-group">
    <h2 class="bank">Bank</h2>
    <input class="input-bank" id="bank">
  </div>

  <div class="form-group">
    <h2 class="Odds">Odds</h2>
    <input class="input-bank" id="odds">  
  </div>

  <div class="form-group">
    <h2 class="Evens">Evens</h2>
    <input class="input-bank" id="evens"> 
  </div>

  <div class ="form-group">
    <button id="reset">RESET</button>
  </div>
`;

  const $addButton = $form.querySelector("#addButton");
  const $sort1Button = $form.querySelector("#sort1");
  const $sortAllButton = $form.querySelector("#sortAll");
  const $addrandNum = $form.querySelector("#addrandNum");
  const $reset = $form.querySelector("#reset");

  $addButton.addEventListener("click", addBank);
  $sort1Button.addEventListener("click", sortOne);
  $sortAllButton.addEventListener("click", sortAll);
  $addrandNum.addEventListener("click", addrandNum);
  $reset.addEventListener("click", resetForm);

  return $form;
};

const main = () => {
  const $h2 = document.createElement("h2");
  $h2.textContent = "Odds and Evens";
  $app.append($h2);
  $app.append(form());
};

main();

