(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var fetch = require("node-fetch");

const url_link = 'https://europe-west1-cobalt-balancer-322313.cloudfunctions.net/getBotAssets'
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
  const response = await fetch(url_link, options)
  const resp = await response.json();
  document.getElementById("json").innerHTML = resp;
  }catch(error){
    document.getElementById("json").innerHTML = error;
  }
}

fetchMyDocument();

},{"node-fetch":2}],2:[function(require,module,exports){
(function (global){(function (){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
