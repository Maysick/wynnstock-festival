// If you have been using Google sheets or other spreadsheet software to manage your
// cards, export it as a tsv to automatically create a settings.json file

// To run, type node tsv-converter.js. You might need to install fs and path?

var fs = require('fs')
var path = require('path')   

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./master.tsv')
  });
  

var delim = "\t"; // prefer to use tsv since csv might have escaping issues with cards that have commas in the name 
var set = "WF" // change to whatever your set's tag is

var cards = [];

// these fields should be the columns of your spreadsheet
var fields = ["type", "cardClass", "rarity", "name", "race", "cost", "attack", "health", "text", "flavor", "artist", "artSource", "collectible", "tokens"];
var tokensIndex = fields.indexOf("tokens");

var count = 0;

lineReader.on('line', function (line) {
    var card = {set: set, collectible: "true", id: count};
    count++;
    var data = line.split(delim);
    for (var i = 0; i < data.length; i++) {
        if (data[i]) {
            card[fields[i]] = {};
            card[fields[i]] = data[i];
            if (data[i] == "TRUE") card[fields[i]] = true;
            else if (data[i] == "FALSE") card[fields[i]] = false;
            if (i == tokensIndex) {
                var tokens = data[i].split(',');
                card[fields[i]] = tokens;
            }
        }
    }
    cards.push(card);
});

lineReader.on('close', function() {
    var settings = {
        cards: cards,
    }
    var data = JSON.stringify(settings, null, 0);

    fs.writeFile('output.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
});
