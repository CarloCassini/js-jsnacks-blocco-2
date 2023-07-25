let nomiList = [
  "rodrigo",
  "franchino",
  "copiaincolla",
  "maraviglia",
  "lollona",
];
let cognomiList = [" furbetti", "copiaincolla", " ricorda"];

let myStartButton = document.getElementById("input-button");

// visualizzo valori di partenza
document.getElementById("valore-input-nomi").innerHTML = nomiList;
document.getElementById("valore-input-contarighe-nomi").innerHTML +=
  nomiList.length;

document.getElementById("valore-input-congomi").innerHTML = cognomiList;
document.getElementById("valore-input-contarighe-cognomi").innerHTML +=
  cognomiList.length;
//

myStartButton.addEventListener("click", function () {
  console.log(nomiList);
  console.log(cognomiList);
  console.log(nomiList.length);
  console.log(cognomiList.length);

  if (nomiList.length > cognomiList.length) {
    for (let i = cognomiList.length; i < nomiList.length; i++) {
      cognomiList.push("++aggiunto++");
      console.log("pushBBB");
    }
  } else if (nomiList.length < cognomiList.length) {
    for (let i = nomiList.length; i < cognomiList.length; i++) {
      nomiList.push("++aggiunto++");
      console.log("pushAAA");
    }
  }

  document.getElementById("valore-output-nomi").innerHTML = nomiList;
  document.getElementById("valore-contarighe-nomi").innerHTML +=
    nomiList.length;

  document.getElementById("valore-output-congomi").innerHTML = cognomiList;
  document.getElementById("valore-contarighe-cognomi").innerHTML +=
    cognomiList.length;

  console.log("again " + nomiList + " ||Totale " + nomiList.length);
  console.log("again " + cognomiList + " ||Totale " + cognomiList.length);
});
