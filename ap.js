var btc = document.getElementById("bitcoin");
var car = document.getElementById("cardano");
var her = document.getElementById("metahero");
var lun = document.getElementById("luni");
var usdTotal = document.getElementById("usd-total");
var plnTotal = document.getElementById("pln-total");

var liveprice = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cmetahero%2Ccardano%2Cluni&vs_currencies=usd%2Cpln",
  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  car.innerHTML = response.cardano.usd;
  her.innerHTML = response.metahero.usd;
  lun.innerHTML = response.luni.usd;

  usdTotal.innerHTML = (
    btc.innerHTML * 0 +
    car.innerHTML * 53 +
    her.innerHTML * 3206 +
    lun.innerHTML * 303640
  ).toFixed(2);
});

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.pln;
  car.innerHTML = response.cardano.pln;
  her.innerHTML = response.metahero.pln;
  lun.innerHTML = response.luni.pln;

  plnTotal.innerHTML = (
    btc.innerHTML * 0 +
    car.innerHTML * 53 +
    her.innerHTML * 3206 +
    lun.innerHTML * 303640
  ).toFixed(2);
});
