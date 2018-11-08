var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var total = []
var sums = []
var res = []


function Teams(hm, v, hms, vs ) {
    this.home = hm,
    this.visitor = v,
    this.homeScore = hms,
    this.visitorScore = vs,
    this.summary = function() {
        return this.home, this.visitor, this.homeScore, this.visitorScore;
    }
}

function createText() {
for (var p = 0; p < 5; p++){
    res[p] = document.getElementById("score" + (p+1))
    var x = Math.floor(Math.random() * 21) + 70
    var y = Math.floor(Math.random() * 21) +70
    var rand1 = Math.floor(Math.random() * countries.length)
    var rand2 = Math.floor(Math.random() * countries.length)
    var scores = new Teams(countries[rand1], countries[rand2], x, y);
    total.push(scores)
    makeScore(total[p].home, total[p].visitor, total[p].homeScore, total[p].visitorScore);
    res[p].textContent = sums[p]
}
}

function makeScore(hm, v, x, y) {
  if(x > y){
    var text = "The home team, " + hm + ", has beaten the visitors, " + v + ", with the score being " + x + " to " + y;
    sums.push(text);
  } else if (x == y) {
    var text = "the home team, " + hm + ", has tied the visitor, " + v + ", with the score stuck at " + x + " to " + y;
    sums.push(text)
  } else if ( y > x) {
    var text = "Unfortuantly, the home team, " + hm + ", has lost to the visitor, " + v + ", with the score being " + y  + " to " + x ;
    sums.push(text);
  }
  return text;
}
createText();


