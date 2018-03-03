// *** clicking the button to create paperclips ***
const button = document.getElementById('btnMakePaperclip');

let createPaperclips = function(numberOfPaperclips) {
    var button = document.getElementById('btnMakePaperclip');
    var max = numberOfPaperclips || 100;
    for (var i = 0 ; i < max ; i++) {
        button.click();
    }
}

createPaperclips(10000);

// *** getting cheap wire at 15$; every 3 sec; ***
// buying only cheap wire to buy in a bulk;
wireCost = parseInt(document.getElementById('wireCost').innerHTML);
const buyWireButton = document.getElementById('btnBuyWire');


let buyCheapWire = function () {
  if ( wireCost <= 15 ) { for(var j = 0; j < 10; j++) { buyWireButton.click() }};
}
setInterval(function(){ buyCheapWire(); }, 3000);

// *** clicking all the ops chips ***
const chips = document.getElementsByClassName('qChip');
const computeButton = document.getElementById('btnQcompute');

let chipClick = function (nrOfClicks) { for (var i = 0 ; i < nrOfClicks ; i++) { computeButton.click(); }}
chipClick(1000);


let getChips = function() {
  sum = 0 ; for (var i = 0 ; i < chips.length; i++) { sum = sum + parseFloat(chips[i].style.opacity); }
  if (sum > 0) { chipClick(1000); }
}

setInterval(function(){ getChips(); }, 500);

// *** new tournament ***
// might want to select greedy strategy before beginning;
const startTournament = document.getElementById('btnNewTournament');
const runTournament = document.getElementById('btnRunTournament');

let playTournament = function () {
    startTournament.click(); runTournament.click();
}

setInterval(function(){ playTournament(); }, 7000);
