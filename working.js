function generateTableHead(table)
{
	let thead = table.createTHead();
	let row = thead.insertRow();
	
	let th = document.createElement("th");
	let text = document.createTextNode("Date");
	
	th.appendChild(text);
	row.appendChild(th);
	
	th = document.createElement("th");
	text = document.createTextNode("Status");
	
	th.appendChild(text);
	row.appendChild(th);
	
//	for (let key of data)
//	{
//		let th = document.createElement("th");
//		let text = document.createTextNode(key);
//		
//		th.appendChild(text);
//		row.appendChild(th);
//	}
}

function generateTable(table, data)
{
	for (let element of data)
	{
		let row = table.insertRow();
		
		for (key in element)
		{
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			
			cell.appendChild(text);
		}
	}
}

function getDateString(date)
{
	var dow = date.getDay();
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
	
	var day = "";
	
	switch (dow)
	{
		case 0:
			day = "Sun";
			break;
			
		case 1:
			day = "Mon";
			break;
			
		case 2:
			day = "Tue";
			break;
			
		case 3:
			day = "Wed";
			break;
			
		case 4:
			day = "Thur";
			break;
			
		case 5:
			day = "Fri";
			break;
			
		case 6:
			day = "Sat";
			break;
			
		default:
			day = "ERR";
	}
	
	return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + ' ' + day;
}

function getWorkingString(m)
{
	if (m == 0)
    	{
    		return "Working";
    	}
    	if (m == 1)
    	{
    		return "Not working";
    	}
    	if (m == 2)
    	{
    		return "Not working";
    	}
}

var start_date = new Date(2021, 05, 24);
var today = new Date();
var offDays = [
	{ date: "t",  status:  "?" },
	{ date: "2",  status:  "?" },
	{ date: "3",  status:  "?" },
	{ date: "4",  status:  "?" },
	{ date: "5",  status:  "?" },
	{ date: "6",  status:  "?" },
	{ date: "7",  status:  "?" },
	{ date: "8",  status:  "?" },
	{ date: "9",  status:  "?" },
	{ date: "10", status:  "?" },
];

var time_difference = Math.abs(today - start_date);
var day_difference = Math.floor(time_difference / (1000 * 60 * 60 * 24));
var mod = day_difference % 3;

let table = document.querySelector("table");
let data = Object.keys(offDays[0]);

var dayA = new Date();
var dayB = new Date();
var dayC = new Date();
var dayD = new Date();
var dayE = new Date();
var dayF = new Date();
var dayG = new Date();
var dayH = new Date();
var dayI = new Date();

dayA.setDate(today.getDate() + 1);
dayB.setDate(today.getDate() + 2);
dayC.setDate(today.getDate() + 3);
dayD.setDate(today.getDate() + 4);
dayE.setDate(today.getDate() + 5);
dayF.setDate(today.getDate() + 6);
dayG.setDate(today.getDate() + 7);
dayH.setDate(today.getDate() + 8);
dayI.setDate(today.getDate() + 9);

offDays[0].date = getDateString(today);
offDays[1].date = getDateString(dayA);
offDays[2].date = getDateString(dayB);
offDays[3].date = getDateString(dayC);
offDays[4].date = getDateString(dayD);
offDays[5].date = getDateString(dayE);
offDays[6].date = getDateString(dayF);
offDays[7].date = getDateString(dayG);
offDays[8].date = getDateString(dayH);
offDays[9].date = getDateString(dayI);

offDays[0].status = getWorkingString((day_difference + 0) % 3)
offDays[1].status = getWorkingString((day_difference + 1) % 3)
offDays[2].status = getWorkingString((day_difference + 2) % 3)
offDays[3].status = getWorkingString((day_difference + 3) % 3)
offDays[4].status = getWorkingString((day_difference + 4) % 3)
offDays[5].status = getWorkingString((day_difference + 5) % 3)
offDays[6].status = getWorkingString((day_difference + 6) % 3)
offDays[7].status = getWorkingString((day_difference + 7) % 3)
offDays[8].status = getWorkingString((day_difference + 8) % 3)
offDays[9].status = getWorkingString((day_difference + 9) % 3)

generateTableHead(table, data);
generateTable(table, offDays);

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
