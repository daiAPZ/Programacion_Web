const str1 = ["loro", "cama", "casa"];
let TN = false;
function TerminaEnA(a) {
  for (let letra of a) {
    if ([letra.length - 1] === "a") TN = true;
  }
  console.log(TN);
}
