const interiList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let output;
let myStartButton = document.getElementById("input-button");

myStartButton.addEventListener("click", function () {
  console.log(interiList);

  for (let i = 0; i <= interiList.length - 1; i = i + 2) {
    console.log(i);
    console.log("interiList.length" + interiList.length);
    // document.getElementById("valore-output").innerHTML += `
    //   <div> ${output} </div>`;
  }
});
