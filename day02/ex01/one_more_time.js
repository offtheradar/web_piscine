var date;
var days_of_week = ["lundi", "Lundi", "mardi", "Mardi", "mercredi", "Mercredi", "jeudi", "Jeudi", "vendredi", "Vendredi", "samedi", "Samedi", "dimanche", "Dimanche"];
var months = ["janvier", "Janvier", "fevrier", "Fevrier", "Mars", "mars", "Avril", "avril", "Mai", "mai", "juin", "Juin", "juillet", "Juillet", "aout", "Aout", "septembre", "Septembre", "Octobre", "octobre", "novembre", "Novembre", "decembre", "Decembre"];

if (process.argv[2]) {
	date = process.argv[2].split(' ');
	date[1] = Number(date[1]);
	date[3] = Number(date[3]);
	if (date.length != 5 || !days_of_week.includes(date[0]) || !(1 <= date[1] <= 31) || !months.includes(date[2])) {
		console.log("Wrong Format");
	} else {
		console.log(days_of_week.indexOf());
	}
} else {
	console.log("Wrong Format");
}