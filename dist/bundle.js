!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r=0,o=0,i=function(){var e=Math.random();return e=e<.34?"ROCK":e<=.67?"PAPER":"SCISSORS"};document.getElementById("play-rock").addEventListener("click",function(){var e=i(),n=void 0;"ROCK"==e?n="IT'S A TIE!":"PAPER"==e?(n="YOU LOSE!",o++):(n="YOU WIN!",r++),document.getElementById("player-option").innerHTML="ROCK",document.getElementById("computer-option").innerHTML=""+e,document.getElementById("result-display").innerHTML=""+n,document.getElementById("score").innerHTML=r+" - "+o}),document.getElementById("play-paper").addEventListener("click",function(){var e=i(),n=void 0;"ROCK"==e?(n="YOU WIN!",r++):"PAPER"==e?n="IT'S A TIE!":(n="YOU LOSE!",o++),document.getElementById("player-option").innerHTML="PAPER",document.getElementById("computer-option").innerHTML=""+e,document.getElementById("result-display").innerHTML=""+n,document.getElementById("score").innerHTML=r+" - "+o}),document.getElementById("play-scissors").addEventListener("click",function(){var e=i(),n=void 0;"ROCK"==e?(n="YOU LOSE!",o++):"PAPER"==e?(n="YOU WIN!",r++):n="IT'S A TIE!",document.getElementById("player-option").innerHTML="SCISSORS",document.getElementById("computer-option").innerHTML=""+e,document.getElementById("result-display").innerHTML=""+n,document.getElementById("score").innerHTML=r+" - "+o})}]);