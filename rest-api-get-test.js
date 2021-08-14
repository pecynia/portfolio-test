// var fetch = require("node-fetch");

const url_link = 'https://europe-west1-cobalt-balancer-322313.cloudfunctions.net/getBotAssets'

async function fetchMyDocument(){
  const options = {
    method: 'POST',
    headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : 'http://127.0.0.1:5500'
            },
    body: JSON.stringify( {} )  
  };
  await fetch( url_link, options )
    .then( response => response.json() )
    .then( response => {
      document.getElementById("json").innerHTML = data;
    } );
}

//https://signal.revenyou.io/production/api/signal/v2/getBotAssetsPct?signalProvider=InterCity.LTI&signalProviderKey=VLH3AX36LZEMQ94A&exchange=binance&baseAsset=USDT
