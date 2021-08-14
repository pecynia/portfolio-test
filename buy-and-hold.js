class Bot {
    constructor(bot_name, assets){
        this.bot_name = bot_name;
        this.assets = assets; 
    }
}

class Asset {
    constructor(name, entry){
        this.name = name;
        this.entry = entry;
    }
}

// --------------------------------------------------------------------

// INTERCITY
const intercity_btc = new Asset("bitcoin", 35500.0)
const intercity_bot = new Bot("intercity", [intercity_btc])

// TUNNELS AND HILLS
const tunnels_btc = new Asset("bitcoin", 34000.0)
const tunnels_bot = new Bot("tunnels", [tunnels_btc])

// SPRINTER
const sprinter_eth = new Asset("ethereum", 1400.0)
const sprinter_bot = new Bot("sprinter", [sprinter_eth])

// INCREMENTAL TRAILWAY
const increm_eth = new Asset("ethereum", 1700.0)
const increm_btc = new Asset("bitcoin", 55000.0)
const increm_bot = new Bot("increm", [increm_eth, increm_btc])

// CRAFTY CARRIAGE
const crafty_link = new Asset("chainlink", 34.0)
const crafty_ada = new Asset("cardano", 1.2880)
const crafty_bnb = new Asset("binancecoin", 522.0)
const crafty_bot = new Bot("crafty", [crafty_link, crafty_ada, crafty_bnb])

// MOUNTAIN TRAIL
const mountain_dot = new Asset("polkadot", 44.3)
const mountain_neo = new Asset("neo", 67.7)
const mountain_xlm = new Asset("stellar", 0.666)
const mountain_dash = new Asset("dash", 300.0)
const mountain_bot = new Bot("mountain", [mountain_dot, mountain_neo, mountain_xlm, mountain_dash])

// ALL BOTS
const bots = [intercity_bot, tunnels_bot, sprinter_bot, 
    increm_bot, crafty_bot, mountain_bot]

// ----------------------------------------------------------------------------------------------------

const base_url = "https://api.coingecko.com/api/v3/simple/price?ids="
const end_url =  "&vs_currencies=USD"

// -------------------------------------------

async function asset_value(asset_string){
    let url = base_url + asset_string + end_url;
    const response = await fetch(url)
    const resp = await response.json();
    return resp[asset_string]['usd'];
}

async function buy_and_hold(bot_name){
    let bot = get_bot(bot_name);
    let buy_cum = 0.0;
    for (let i = 0; i < bot.assets.length; i++) {
        let asset_name = bot.assets[i].name;
        let asset_entry = bot.assets[i].entry;
        const asset_val = await asset_value(asset_name);
        diff = (asset_val - asset_entry)/asset_entry * 100
        buy_cum = buy_cum + diff;
      }
    buy_cum = buy_cum/bot.assets.length;
    document.getElementById("bot_stats").innerHTML = Math.round(buy_cum, 2) + "%";
}

function get_bot(name_string){
    for (let i = 0; i < bots.length; i++) {
        if (bots[i].bot_name == name_string){
            return bots[i];
        }
        if (bots[i].bot_name != name_string && i==bots.length){
            document.getElementById("bot_stats").innerHTML = "ERR";
        }
    }
}

