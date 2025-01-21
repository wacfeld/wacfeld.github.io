function pad2(x)
{
  if(x < 10)
    return "0" + x;
  else return x;
}

function pad3(x)
{
  if (x < 10)
    return "00" + x;
  else if (x < 100)
    return "0" + x;
  else return x;
}

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

function days_of_a_year(year) 
{
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 400 == 0 || (year % 100 !== 0 && year % 4 === 0);
}

function daysSinceNewYear()
{
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

function pad(number, length) {

  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }

  return str;

}

var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']
var months = ['placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setInterval(function() {
  d = new Date();
  var dec = d.getMilliseconds()/100;
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();
  var dat = d.getDate();
  var mon = d.getMonth()+1;
  var yr = d.getFullYear();
  var oldyr = yr;

  //document.getElementById("time1").innerHTML = "<span>" + d.getFullYear() + "-" + pad2(mon) + "-" + pad2(dat) + "(" + week[d.getDay()] + ") " + pad2(hr) + ":" + pad2(min) + ":" + pad2(sec) + '.' + Math.floor(dec) + "</span>";

  document.getElementById("time1").innerHTML = `<span>${week[d.getDay()]} ${pad2(dat)} ${months[mon]} ${yr} ${pad2(hr)}:${pad2(min)}:${pad2(sec)}`

  // clean web development is beneath me

  sec += dec/10;
  min += sec/60;
  hr += min/60;
  dat += hr/24;
  mon += (dat-1)/daysInMonth(mon,oldyr);
  console.log(dat-1);
  yr +=(daysSinceNewYear()+hr/24-1)/days_of_a_year(oldyr);

  //document.getElementById("time").innerHTML += "<p>" + sec.toString().padEnd(10,"0") + "</p>" + "<p>" + min.toString().padEnd(10,"0") + "</p>" + "<p>" + hr.toString().padEnd(10,"0") + "</p>" + "<p>" + dat.toString().padEnd(10,"0") + "</p>" + "<p>" + mon.toString().padEnd(10,"0") + "</p>" + "<p>" + yr.toString().padEnd(10,"0") + "</p>";

  document.getElementById("time2").innerHTML = "<p style='color:#ff0000;'>" +
    sec.toFixed(1)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</p>" + "<p style='color:#ffa500;'>" +
    min.toFixed(3)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</p>" + "<p style='color:#ffff00;'>" +
    hr.toFixed(5)+"&nbsp;&nbsp;&nbsp;&nbsp;" + "</p>" + "<p style='color:#00ff00;'>" +
    dat.toFixed(6)+"&nbsp;&nbsp;&nbsp;" + "</p>" + "<p style='color:#00ffff;'>" + "   "+
    // mon.toFixed(8)+"&nbsp;" + "</p>" + "<p style='color:#4b0082;'>" +
    mon.toFixed(8)+"&nbsp;" + "</p>" + "<p style='color:#0000ff;'>" +
    // yr.toFixed(9) + "</p>" + "<p style='color:#e53fe5'>C.E.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>";
    yr.toFixed(9) + "</p>" + "<p style='color:#7700CF'>C.E.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>";
},100);
