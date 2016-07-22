//["Bob","Nora"],["Ruby","Carl"]]),["Bob","Nora","Carl","Ruby", "Jennie", "Pam"]

function binRota(arrRaw){
  var rota = [];
  for (var i = 0; i < arrRaw.length; i++){
    if (i%2 === 0) {
      for (var j = 0; j < arrRaw[i].length; j++) {
        rota.push(arrRaw[i][j]);
      }
    } else {
      for (var h = arrRaw[i].length - 1; h >= 0; h--) {
        rota.push(arrRaw[i][h]);
      }
    }
  }
  console.log(rota);
  return rota;
}

binRota([["Bob","Nora"],["Ruby","Carl"],["Jennie","Pam"]]);
