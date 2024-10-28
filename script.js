document.getElementById("btn").addEventListener("click", average);

function average() {
  // input

  let gr1 = +document.getElementById("score1").value;

  let gr2 = +document.getElementById("score2").value;

  let gr3 = +document.getElementById("score3").value;

  let gr4 = +document.getElementById("score4").value;

  let gr5 = +document.getElementById("score5").value;
  console.log("INPUT WORKED");
  // process

  let avg = gr1 + gr2 + gr3 + gr4 + gr5;

  let gradecalc = avg / 5;
  console.log("PROCESS WORKED");
  // output

  document.getElementById("output").innerHTML = Math.round(gradecalc);
  console.log(avg);
}
