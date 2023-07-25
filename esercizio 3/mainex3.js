const interiList = [1, 23, 23, 554, 225, 876, 72344, 128, 2349];

let output;
let myStartButton = document.getElementById("input-button");

myStartButton.addEventListener("click", function () {
  output = 0;
  console.log(interiList);

  for (let i = 0; i <= interiList.length - 1; i = i + 2) {
    output = output + parseInt(interiList[i]);
    console.log("output " + output);
  }

  document.getElementById("valore-output").innerHTML = `
   <div> ${output} </div>`;
});
