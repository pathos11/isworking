var start_date = new Date(2021, 05, 24);
var today = new Date();

var time_difference = Math.abs(today - start_date);
var day_difference = Math.floor(time_difference / (1000 * 60 * 60 * 24));
var mod = day_difference % 3;

if (mod == 0)
{
	document.getElementById("today").innerHTML = "working =(";
	document.getElementById("tomorrow").innerHTML = "not working!";
}
else if (mod == 1)
{
	document.getElementById("today").innerHTML = "not working!";
	document.getElementById("tomorrow").innerHTML = "also not working!";
}
else if (mod == 2)
{
	document.getElementById("today").innerHTML = "not working!";
	document.getElementById("tomorrow").innerHTML = "working =(";
}
