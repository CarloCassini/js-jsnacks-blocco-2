console.log("wakka");
let userNumber;
let output;
let myStartButton = document.getElementById("input-button");

myStartButton.addEventListener("click", function () {
  userNumber = parseInt(document.getElementById("user-number-input").value);
  console.log(userNumber);

  if (isNaN(userNumber)) {
    output = "inserisci un valore numerico";
  } else {
    if (userNumber % 2 == 0) {
      output = userNumber;
    } else {
      output = userNumber + 1;
    }
  }

  document.getElementById("valore-output").innerHTML = output;
});
