const interiList = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

let output;
let myStartButton = document.getElementById("input-button");

myStartButton.addEventListener("click", function () {
  output = 0;
  document.getElementById("display-array").innerHTML = " ";
  document.getElementById("display-array").innerHTML = interiList;

  for (let i = 0; i <= interiList.length - 1; i = i + 2) {
    output = output + parseInt(interiList[i]);
  }

  document.getElementById("valore-output").innerHTML = "";
  document.getElementById("valore-output").innerHTML = `
   <div> ${output} </div>`;
});
