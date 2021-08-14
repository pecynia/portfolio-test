var fetch = require("node-fetch");

const url_link = 'http://europe-west1-cobalt-balancer-322313.cloudfunctions.net/getBotAssets'
// const url_link = 'https://signal.revenyou.io/production/api/signal/v2/getBotAssetsPct?signalProvider=Incr3mental%20Trailway&signalProviderKey=Y9TEOLC4CJWSPKLG&exchange=binance&baseAsset=USDT'

async function fetchMyDocument(){
  const options = {
    method: 'POST',
    headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*'
            },
    body: JSON.stringify( {} )  
  }
  try{
  const response = await fetch(url_link)
  const resp = await response.json();
  document.getElementById("json").innerHTML = resp;
  }catch(error){
    document.getElementById("json").innerHTML = error;
  }
}

fetchMyDocument();
