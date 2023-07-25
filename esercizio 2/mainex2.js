const nomiList = ["rodrigo", "franchino", "giuggiolo", "maraviglia", "lollona"];
const cognomiList = [
  " furbetti",
  "copiaincolla",
  " ricorda",
  " seiperotto",
  "frescosispera",
];

let output;
let invitati;
let contaRighe = 0;
let myStartButton = document.getElementById("input-button");

myStartButton.addEventListener("click", function () {
  invitati = parseInt(document.getElementById("user-number-input").value);
  console.log(invitati);
  console.log(nomiList);

  if (isNaN(invitati)) {
    output = "inserisci un valore numerico";
  } else {
    for (let i = 0; i < invitati; i++) {
      let nomeScelto;
      let cognomeScelto;

      nomeScelto = nomiList[Math.floor(Math.random() * nomiList.length + 0)];
      cognomeScelto =
        cognomiList[Math.floor(Math.random() * cognomiList.length + 0)];

      output = nomeScelto + " " + cognomeScelto;
      contaRighe = i + 1;

      document.getElementById("valore-output").innerHTML += `
      <div> ${output} </div>`;
    }
    document.getElementById("valore-contarighe").innerHTML =
      "righe generate " + contaRighe;
  }
});
