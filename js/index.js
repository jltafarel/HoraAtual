$('#locker').on('click', function(e) {
  e.preventDefault();
  $('#screen').toggleClass('activate');
});

$('#reset').on('click', function(e) {
  e.preventDefault();
  $('#screen').removeClass('activate'); 
});

var setTime = function() {
  var time = moment().format('hh:mm:ss');
  var date = moment().format('dddd');
  if (date == "Wednesday")
    {
      date = "Quarta-Feira"
    }
  else if (date == "Monday")
    {
      date = "Segunda-Feira"
    }
  else if (date == "Tuesday")
    {
      date = "Terça-Feira"
    }
  else if (date == "Thursday")
    {
      date = "Quinta-Feira"
    }
  else if (date == "Friday")
    {
      date = "Sexta-Feira"
    }
  else if (date == "Saturday")
    {
      date = "Sábado"
    }
  else if (date == "Sunday")
    {
      date = "Domingo"
    }
  $('#date').html(date);
  $('#time').html(time);
};

setTime();
setInterval(setTime, 1000);

var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outumbro", "Novembro", "Dezembro"];

document.getElementById('daymonth').innerHTML = months[month] + " " + day;
document.getElementById('year').innerHTML = year;

var clockH = $(".hours");
var clockM = $(".minutes");
var clockS = $(".seconds");

function time() {     
  var d = new Date(),
      s = d.getSeconds() * 6,
      m = d.getMinutes() * 6 + (s / 60),
      h = d.getHours() % 12 / 12 * 360 + (m / 12);  
    clockH.css("transform", "rotate("+h+"deg)");
    clockM.css("transform", "rotate("+m+"deg)");
    clockS.css("transform", "rotate("+s+"deg)");
}

var clock = setInterval(time, 1000);
time();